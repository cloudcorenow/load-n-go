interface Env {
  CONTACT_SUBMISSIONS: KVNamespace;
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
