import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    headers: req.headers.append('Auhtorization', 'Bearer 1234567'),
  });
  return next(authReq);
};
