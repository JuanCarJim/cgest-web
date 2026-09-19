# Web de C-Gest

Página pública de **C-Gest**, el programa de gestión para comunidades de
propietarios que se llevan solas, sin administrador de fincas.

Se publica con GitHub Pages. **El código fuente vive en el repositorio privado
del proyecto**, en `sitio/`; aquí sólo está lo que se sirve.

## El formulario

Escribe directo en la tabla `solicitudes_contacto` de Supabase. La clave de
`config.js` es la **anónima**, pública a propósito: es la misma que lleva la
aplicación del vecino, y lo que protege los datos es el Row Level Security, no
el secreto de esa cadena. Sobre esa tabla el rol anónimo **sólo puede
insertar**: no puede leer ni la fila que acaba de escribir.

Las solicitudes se consultan desde el panel de Supabase.
