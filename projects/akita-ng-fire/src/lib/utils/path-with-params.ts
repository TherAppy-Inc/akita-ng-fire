/**
 * Transform a path based on the params
 * @param path The path with params starting with "/:"
 * @param params A map of id params
 * @example pathWithParams('movies/:movieId/stakeholder/:shId', { movieId, shId })
 */
function pathWithParams(path: string, params: {[params: string]: string}) {
  path.split('/').map(segment => {
    if (segment.charAt(0) === ':') {
      const key = segment.substr(1);
      if (!params[key]) {
        throw new Error(`Required parameter ${key} from ${path} doesn't exist in params ${params}`);
      }
      return params[key];
    } else {
      return segment;
    }
  }).join('/');
}
