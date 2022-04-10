---
to: "<%= locals.route ? `${route}/${name}/index.ts` : `src/components/${name}/index.ts` %>"
---
import <%=Name%> from './<%=Name%>';

export default <%=Name%>;