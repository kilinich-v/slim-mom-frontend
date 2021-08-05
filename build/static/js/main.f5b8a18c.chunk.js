;(this['webpackJsonpslim-mom-frontend'] =
  this['webpackJsonpslim-mom-frontend'] || []).push([
  [4],
  {
    116: function (t, e, n) {
      'use strict'
      n.r(e)
      var c,
        r,
        o,
        a,
        u,
        i,
        s = n(0),
        d = n.n(s),
        l = n(27),
        b = n.n(l),
        j = n(21),
        O = n(30),
        f = n(74),
        g = n(40),
        m = n(3),
        p = n(9),
        h = n(23),
        P = n(75),
        S = n.n(P),
        v = n(4),
        L = n(29),
        k = n(6),
        y = { kcal: null, productsNotRecommended: null },
        x = Object(m.c)(
          y,
          ((c = {}),
          Object(v.a)(c, L.c, function (t, e) {
            return e.payload
          }),
          Object(v.a)(c, k.h, function () {
            return y
          }),
          c),
        ),
        R = Object(m.c)(
          null,
          ((r = {}),
          Object(v.a)(r, L.a, function (t, e) {
            return e.payload
          }),
          Object(v.a)(r, k.g, function () {
            return null
          }),
          r),
        ),
        E = Object(m.c)(
          !1,
          ((o = {}),
          Object(v.a)(o, L.b, function () {
            return !0
          }),
          Object(v.a)(o, L.c, function () {
            return !1
          }),
          Object(v.a)(o, L.a, function () {
            return !1
          }),
          o),
        ),
        q = Object(p.b)({ calcData: x, error: R, loading: E }),
        I = n(17),
        w = n(20),
        F = {
          email: '',
          date: '',
          products: [],
          dayNorm: 0,
          totalKcalPerDay: 0,
          kcalRemain: 0,
          percentage: null,
          productsNotRecommended: [],
        },
        U = Object(m.c)(
          F,
          ((a = {}),
          Object(v.a)(a, w.a.addProductSuccess, function (t, e) {
            var n = e.payload
            return Object(I.a)(
              Object(I.a)({}, t),
              {},
              { products: [n].concat(Object(g.a)(t.products)) },
            )
          }),
          Object(v.a)(a, w.a.dateEatenProductsSuccess, function (t, e) {
            return e.payload
          }),
          Object(v.a)(a, w.a.deleteProductIdSuccess, function (t, e) {
            var n = e.payload,
              c = t.products.filter(function (t) {
                return t.id !== n
              })
            return Object(I.a)(Object(I.a)({}, t), {}, { products: c })
          }),
          Object(v.a)(a, k.h, function () {
            return F
          }),
          a),
        ),
        z = Object(m.c)(
          !1,
          ((u = {}),
          Object(v.a)(u, w.a.addProductRequest, function (t, e) {
            return !0
          }),
          Object(v.a)(u, w.a.addProductSuccess, function (t, e) {
            return !1
          }),
          Object(v.a)(u, w.a.addProductError, function (t, e) {
            return !1
          }),
          u),
        ),
        C = Object(m.c)(
          null,
          ((i = {}),
          Object(v.a)(i, w.a.deleteProductIdError, function (t, e) {
            return e.payload
          }),
          Object(v.a)(i, w.a.addProductRequest, function () {
            return null
          }),
          Object(v.a)(i, k.g, function () {
            return null
          }),
          Object(v.a)(i, w.a.dateEatenProductsRequest, function () {
            return null
          }),
          i),
        ),
        T = Object(p.b)({ diaryInfo: U, loading: z, error: C }),
        N = Object(g.a)(
          Object(m.e)({
            serializableCheck: {
              ignoredActions: [h.a, h.f, h.b, h.c, h.d, h.e],
            },
          }),
        ),
        A = { key: 'user', storage: S.a, whitelist: ['token'] },
        D = Object(p.b)({ kcal: q, user: k.a, products: T }),
        B = Object(h.g)(A, D),
        G = Object(m.a)({ reducer: B, middleware: N }),
        J = Object(h.h)(G),
        K = (n(92), n(5)),
        M = n(18),
        H = n(49),
        Q = n(54),
        V = (n(78), n(70)),
        W = n(28),
        X = n(2),
        Y = ['component', 'redirectTo'],
        Z = function (t) {
          var e = t.component,
            n = t.redirectTo,
            c = Object(V.a)(t, Y),
            r = Object(j.c)(W.a)
          return Object(X.jsx)(
            K.b,
            Object(I.a)(
              Object(I.a)({}, c),
              {},
              {
                render: function (t) {
                  return r && c.restricted
                    ? Object(X.jsx)(K.a, { to: n })
                    : Object(X.jsx)(e, Object(I.a)({}, t))
                },
              },
            ),
          )
        },
        $ = function (t) {
          return Object(j.c)(W.a) || localStorage.getItem('token')
            ? Object(X.jsx)(K.b, Object(I.a)({}, t))
            : Object(X.jsx)(K.a, { to: M.a.main })
        },
        _ = n(53),
        tt = Object(s.lazy)(function () {
          return Promise.all([n.e(0), n.e(8)]).then(n.bind(null, 255))
        }),
        et = Object(s.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(3), n.e(2), n.e(10)]).then(
            n.bind(null, 253),
          )
        }),
        nt = Object(s.lazy)(function () {
          return Promise.all([n.e(0), n.e(3), n.e(7)]).then(n.bind(null, 249))
        }),
        ct = Object(s.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(2), n.e(11)]).then(
            n.bind(null, 254),
          )
        }),
        rt = Object(s.lazy)(function () {
          return Promise.all([n.e(0), n.e(9)]).then(n.bind(null, 256))
        })
      var ot = function () {
        var t = Object(j.b)(),
          e = Object(j.c)(W.a)
        return (
          Object(s.useEffect)(
            function () {
              ;(e || localStorage.getItem('token')) && t(Object(H.a)())
            },
            [t],
          ),
          Object(X.jsxs)(X.Fragment, {
            children: [
              Object(X.jsx)(Q.a, { autoClose: 2e3 }),
              Object(X.jsx)(s.Suspense, {
                fallback: Object(X.jsx)(_.a, {}),
                children: Object(X.jsxs)(K.d, {
                  children: [
                    Object(X.jsx)(Z, {
                      path: M.a.main,
                      exact: !0,
                      restricted: !0,
                      component: ct,
                      redirectTo: M.a.calculator,
                    }),
                    Object(X.jsx)(Z, {
                      path: M.a.auth,
                      restricted: !0,
                      component: tt,
                      redirectTo: M.a.diary,
                    }),
                    Object(X.jsx)(Z, {
                      path: M.a.reg,
                      restricted: !0,
                      component: rt,
                      redirectTo: M.a.diary,
                    }),
                    Object(X.jsx)($, { path: M.a.calculator, component: et }),
                    Object(X.jsx)($, { path: M.a.diary, component: nt }),
                  ],
                }),
              }),
            ],
          })
        )
      }
      b.a.render(
        Object(X.jsx)(O.a, {
          children: Object(X.jsx)(d.a.StrictMode, {
            children: Object(X.jsx)(j.a, {
              store: G,
              children: Object(X.jsx)(f.a, {
                loading: null,
                persistor: J,
                children: Object(X.jsx)(ot, {}),
              }),
            }),
          }),
        }),
        document.getElementById('root'),
      )
    },
    18: function (t, e, n) {
      'use strict'
      e.a = {
        main: '/',
        auth: '/auth',
        reg: '/registration',
        calculator: '/calculator',
        diary: '/diary',
      }
    },
    20: function (t, e, n) {
      'use strict'
      var c = n(3),
        r = {
          addProductRequest: Object(c.b)('products/addProductRequest'),
          addProductSuccess: Object(c.b)('products/addProductSuccess'),
          addProductError: Object(c.b)('products/addProductError'),
          dateEatenProductsRequest: Object(c.b)(
            'products/dateEatenProductsRequest',
          ),
          dateEatenProductsSuccess: Object(c.b)(
            'products/dateEatenProductsSuccess',
          ),
          dateEatenProductsError: Object(c.b)(
            'products/dateEatenProductsError',
          ),
          deleteProductIdRequest: Object(c.b)(
            'products/deleteProductIdRequest',
          ),
          deleteProductIdSuccess: Object(c.b)(
            'products/deleteProductIdSuccess',
          ),
          deleteProductIdError: Object(c.b)('products/deleteProductIdError'),
        }
      e.a = r
    },
    28: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return c
      }),
        n.d(e, 'b', function () {
          return r
        })
      var c = function (t) {
          return t.user.isLoggedOn
        },
        r = function (t) {
          return t.user.name
        }
    },
    29: function (t, e, n) {
      'use strict'
      n.d(e, 'b', function () {
        return r
      }),
        n.d(e, 'c', function () {
          return o
        }),
        n.d(e, 'a', function () {
          return a
        })
      var c = n(3),
        r = Object(c.b)('contact/AddContactRequest'),
        o = Object(c.b)('contact/addContactSuccess'),
        a = Object(c.b)('contact/addContactError')
    },
    32: function (t, e, n) {
      'use strict'
      var c = n(52),
        r = n
          .n(c)
          .a.create({ baseURL: 'https://slim-mom-backend.herokuapp.com' })
      r.interceptors.request.use(function (t) {
        var e = localStorage.getItem('token')
        return (t.headers.Authorization = e ? 'Bearer '.concat(e) : ''), t
      }),
        (e.a = r)
    },
    49: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return i
      }),
        n.d(e, 'b', function () {
          return s
        }),
        n.d(e, 'd', function () {
          return d
        }),
        n.d(e, 'c', function () {
          return l
        })
      var c = n(43),
        r = n.n(c),
        o = n(51),
        a = n(32),
        u = n(6),
        i = function () {
          return (function () {
            var t = Object(o.a)(
              r.a.mark(function t(e, n) {
                var c
                return r.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            e(Object(u.j)()),
                            (t.prev = 1),
                            (t.next = 4),
                            a.a.get('/users/current')
                          )
                        case 4:
                          ;(c = t.sent), e(Object(u.b)(c.data)), (t.next = 11)
                          break
                        case 8:
                          ;(t.prev = 8),
                            (t.t0 = t.catch(1)),
                            e(Object(u.c)(t.t0.message))
                        case 11:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[1, 8]],
                )
              }),
            )
            return function (e, n) {
              return t.apply(this, arguments)
            }
          })()
        },
        s = function (t) {
          return function (e, n) {
            e(Object(u.d)()),
              a.a
                .post('/users/login', t)
                .then(function (t) {
                  var n = t.data
                  return (
                    localStorage.setItem('token', n.token), e(Object(u.e)(n))
                  )
                })
                .catch(function (t) {
                  e(Object(u.c)(t.message))
                })
          }
        },
        d = function (t) {
          return function (e, n) {
            var c = t.name,
              r = t.email,
              o = t.password
            e(Object(u.j)()),
              a.a
                .post('/users/signup', { name: c, email: r, password: o })
                .then(function (t) {
                  var n = t.data
                  localStorage.setItem('token', n.token),
                    e(Object(u.k)(n)) && e(s({ email: r, password: o }))
                })
                .catch(function (t) {
                  e(Object(u.i)(t.message))
                })
          }
        },
        l = function (t) {
          return function (e, n) {
            e(Object(u.g)()),
              a.a
                .post('/users/logout', t)
                .then(function () {
                  localStorage.removeItem('token'),
                    localStorage.removeItem('calcFormParams'),
                    e(Object(u.h)())
                })
                .catch(function (t) {
                  return e(Object(u.f)(t.message))
                })
          }
        }
    },
    53: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return u
      })
      n(0)
      var c = n(117),
        r = n(118),
        o = n(2),
        a = Object(c.a)(function () {
          return {
            root: {
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              color: '#FC842D',
            },
          }
        })
      function u() {
        var t = a()
        return Object(o.jsx)('div', {
          className: t.root,
          children: Object(o.jsx)(r.a, { color: 'inherit' }),
        })
      }
    },
    6: function (t, e, n) {
      'use strict'
      n.d(e, 'j', function () {
        return u
      }),
        n.d(e, 'k', function () {
          return i
        }),
        n.d(e, 'i', function () {
          return s
        }),
        n.d(e, 'b', function () {
          return d
        }),
        n.d(e, 'd', function () {
          return l
        }),
        n.d(e, 'e', function () {
          return b
        }),
        n.d(e, 'c', function () {
          return j
        }),
        n.d(e, 'g', function () {
          return O
        }),
        n.d(e, 'h', function () {
          return f
        }),
        n.d(e, 'f', function () {
          return g
        })
      var c = n(3),
        r = Object(c.d)({
          name: 'user',
          initialState: {
            name: '',
            email: '',
            token: '',
            isLoggedOn: !1,
            isLoading: !1,
            error: '',
          },
          reducers: {
            onSignUpRequest: function (t) {
              t.isLoading = !0
            },
            onSignUpSuccess: function (t, e) {
              var n = e.payload
              ;(t.name = n.name),
                (t.email = n.email),
                (t.token = n.token),
                (t.isLoggedOn = !!n.token)
            },
            onSignUpFailure: function (t, e) {
              var n = e.payload
              ;(t.error = n.message), (t.isLoggedOn = !1), (t.isLoading = !1)
            },
            onLoginRequest: function (t) {
              t.isLoading = !0
            },
            onLoginSuccess: function (t, e) {
              var n = e.payload
              ;(t.name = n.name),
                (t.email = n.email),
                (t.token = n.token),
                (t.isLoggedOn = !0),
                (t.isLoading = !1)
            },
            onLoginFailure: function (t, e) {
              var n = e.payload
              ;(t.error = n.message), (t.isLoggedOn = !1), (t.isLoading = !1)
            },
            onLogoutRequest: function (t) {
              t.isLoading = !0
            },
            onLogoutSuccess: function (t, e) {
              e.payload
              ;(t.name = ''),
                (t.email = ''),
                (t.token = ''),
                (t.isLoading = !1),
                (t.isLoggedOn = !1)
            },
            onLogoutFailure: function (t, e) {
              var n = e.payload
              ;(t.error = n.message), (t.isLoading = !1)
            },
            onGetUser: function (t, e) {
              var n = e.payload
              ;(t.name = n.name),
                (t.email = n.email),
                (t.isLoggedOn = !0),
                (t.isLoading = !1)
            },
          },
        }),
        o = r.actions,
        a = r.reducer,
        u = o.onSignUpRequest,
        i = o.onSignUpSuccess,
        s = o.onSignUpFailure,
        d = (o.onLogout, o.onGetUser),
        l = o.onLoginRequest,
        b = o.onLoginSuccess,
        j = o.onLoginFailure,
        O = o.onLogoutRequest,
        f = o.onLogoutSuccess,
        g = o.onLogoutFailure
      e.a = a
    },
    92: function (t, e, n) {},
  },
  [[116, 5, 6]],
])
//# sourceMappingURL=main.f5b8a18c.chunk.js.map
