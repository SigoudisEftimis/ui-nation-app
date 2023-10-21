export class HttpUtils {
  static addQueryParamIfNotNull(queryParams: { [param: string]: string }, paramName: string, paramValue: any) {
    if (paramValue !== null && paramValue !== undefined) {
      queryParams[paramName] = paramValue.toString();
    }
  }
}
