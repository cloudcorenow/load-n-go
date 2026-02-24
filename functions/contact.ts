interface Env {
  CONTACT_SUBMISSIONS?: KVNamespace;
  RESEND_API_KEY?: string;
}

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (context.request.method === 'OPTIONS') {
    return new Response(null, {
      headers: corsHeaders,
    });
  }

  try {
    const formData: ContactFormData = await context.request.json();

    if (!formData.name || !formData.email || !formData.message) {
      return new Response(
        JSON.stringify({
          error: 'Missing required fields: name, email, and message are required'
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    }

    const submissionId = crypto.randomUUID();
    const timestamp = new Date().toISOString();

    const submission = {
      id: submissionId,
      name: formData.name,
      email: formData.email,
      phone: formData.phone || '',
      message: formData.message,
      timestamp,
      status: 'new',
    };

    if (context.env.CONTACT_SUBMISSIONS) {
      await context.env.CONTACT_SUBMISSIONS.put(
        submissionId,
        JSON.stringify(submission)
      );
    }

    if (context.env.RESEND_API_KEY) {
      try {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${context.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Load N Go <noreply@load-n-go.biz>',
            to: ['info@load-n-go.biz'],
            subject: `New Contact Form Submission from ${formData.name}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${formData.name}</p>
              <p><strong>Email:</strong> ${formData.email}</p>
              ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
              <p><strong>Message:</strong></p>
              <p>${formData.message.replace(/\n/g, '<br>')}</p>
              <hr>
              <p><small>Submission ID: ${submissionId}</small></p>
              <p><small>Received: ${new Date(timestamp).toLocaleString()}</small></p>
            `,
            text: `
New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
${formData.phone ? `Phone: ${formData.phone}\n` : ''}
Message:
${formData.message}

---
Submission ID: ${submissionId}
Received: ${new Date(timestamp).toLocaleString()}
            `,
          }),
        });

        if (!emailResponse.ok) {
          console.error('Failed to send email:', await emailResponse.text());
        }
      } catch (emailError) {
        console.error('Error sending email:', emailError);
      }
    }

    console.log('Contact form submission received:', {
      id: submissionId,
      name: formData.name,
      email: formData.email,
      timestamp,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you for contacting us! We'll get back to you soon.",
        submissionId,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  }
}
