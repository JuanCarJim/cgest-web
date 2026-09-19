/**
 * Adónde manda el formulario sus solicitudes.
 *
 * La clave anónima es pública a propósito: es la misma que lleva la aplicación
 * del vecino, y lo que protege la base es la RLS, no el secreto de esta cadena.
 * Sobre la tabla solicitudes_contacto el rol anónimo SÓLO puede insertar: no
 * puede leer ni una fila, ni siquiera la que acaba de escribir (migración 0031).
 */
window.CGEST = {
  url: 'https://pxjjscugetkzrugydage.supabase.co',
  clave: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4ampzY3VnZXRrenJ1Z3lkYWdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg1OTgxNTUsImV4cCI6MjEwNDE3NDE1NX0.dzlXkCVub2gmypH0BTzfeSsLrYhbbnU-duYBXiTD7W8',
};
