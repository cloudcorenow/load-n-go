export async function onRequest(context) {
  const response = await context.next();
  const url = new URL(context.request.url);

  // Fix MIME types for JavaScript files
  if (url.pathname.endsWith('.js')) {
    const headers = new Headers(response.headers);
    headers.set('Content-Type', 'application/javascript; charset=utf-8');
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers
    });
  }

  return response;
}
