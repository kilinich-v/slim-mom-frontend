;(this['webpackJsonpslim-mom-frontend'] =
  this['webpackJsonpslim-mom-frontend'] || []).push([
  [4],
  {
    116: function (e, t, n) {
      'use strict'
      n.r(t)
      var c,
        r,
        o,
        a,
        u = n(0),
        s = n.n(u),
        i = n(27),
        d = n.n(i),
        l = n(23),
        b = n(29),
        j = n(74),
        O = n(40),
        f = n(3),
        g = n(8),
        p = n(22),
        m = n(75),
        h = n.n(m),
        P = n(5),
        L = n(28),
        v = Object(f.c)(
          { kcal: null, productsNotRecommended: null },
          Object(P.a)({}, L.c, function (e, t) {
            return t.payload
          }),
        ),
        S = Object(f.c)(
          null,
          Object(P.a)({}, L.a, function (e, t) {
            return t.payload
          }),
        ),
        y = Object(f.c)(
          !1,
          ((c = {}),
          Object(P.a)(c, L.b, function () {
            return !0
          }),
          Object(P.a)(c, L.c, function () {
            return !1
          }),
          Object(P.a)(c, L.a, function () {
            return !1
          }),
          c),
        ),
        k = Object(g.b)({ calcData: v, error: S, loading: y }),
        x = n(9),
        R = n(17),
        E = n(20),
        q = {
          email: '',
          date: '',
          products: [],
          dayNorm: 0,
          totalKcalPerDay: 0,
          kcalRemain: 0,
          percentage: null,
          productsNotRecommended: [],
        },
        I = Object(f.c)(
          q,
          ((r = {}),
          Object(P.a)(r, E.a.addProductSuccess, function (e, t) {
            var n = t.payload
            return Object(R.a)(
              Object(R.a)({}, e),
              {},
              { products: [n].concat(Object(O.a)(e.products)) },
            )
          }),
          Object(P.a)(r, E.a.dateEatenProductsSuccess, function (e, t) {
            return t.payload
          }),
          Object(P.a)(r, E.a.deleteProductIdSuccess, function (e, t) {
            var n = t.payload,
              c = e.products.filter(function (e) {
                return e.id !== n
              })
            return Object(R.a)(Object(R.a)({}, e), {}, { products: c })
          }),
          Object(P.a)(r, x.h, function () {
            return q
          }),
          r),
        ),
        U = Object(f.c)(
          !1,
          ((o = {}),
          Object(P.a)(o, E.a.addProductRequest, function (e, t) {
            return !0
          }),
          Object(P.a)(o, E.a.addProductSuccess, function (e, t) {
            return !1
          }),
          Object(P.a)(o, E.a.addProductError, function (e, t) {
            return !1
          }),
          o),
        ),
        w = Object(f.c)(
          null,
          ((a = {}),
          Object(P.a)(a, E.a.deleteProductIdError, function (e, t) {
            return t.payload
          }),
          Object(P.a)(a, E.a.addProductRequest, function () {
            return null
          }),
          Object(P.a)(a, x.g, function () {
            return null
          }),
          Object(P.a)(a, E.a.dateEatenProductsRequest, function () {
            return null
          }),
          a),
        ),
        F = Object(g.b)({ diaryInfo: I, loading: U, error: w }),
        z = Object(O.a)(
          Object(f.e)({
            serializableCheck: {
              ignoredActions: [p.a, p.f, p.b, p.c, p.d, p.e],
            },
          }),
        ),
        C = { key: 'user', storage: h.a, whitelist: ['token'] },
        T = Object(g.b)({ kcal: k, user: x.a, products: F }),
        N = Object(p.g)(C, T),
        A = Object(f.a)({ reducer: N, middleware: z }),
        D = Object(p.h)(A),
        B = (n(92), n(4)),
        G = n(18),
        J = n(49),
        K = n(53),
        M = (n(78), n(70)),
        H = n(34),
        Q = n(2),
        V = ['component', 'redirectTo'],
        W = function (e) {
          var t = e.component,
            n = e.redirectTo,
            c = Object(M.a)(e, V),
            r = Object(l.c)(H.a)
          return Object(Q.jsx)(
            B.b,
            Object(R.a)(
              Object(R.a)({}, c),
              {},
              {
                render: function (e) {
                  return r && c.restricted
                    ? Object(Q.jsx)(B.a, { to: n })
                    : Object(Q.jsx)(t, Object(R.a)({}, e))
                },
              },
            ),
          )
        },
        X = function (e) {
          return Object(l.c)(H.a)
            ? Object(Q.jsx)(B.b, Object(R.a)({}, e))
            : Object(Q.jsx)(B.a, { to: G.a.main })
        },
        Y = n(63),
        Z = Object(u.lazy)(function () {
          return Promise.all([n.e(0), n.e(9)]).then(n.bind(null, 253))
        }),
        $ = Object(u.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(3), n.e(2), n.e(8)]).then(
            n.bind(null, 251),
          )
        }),
        _ = Object(u.lazy)(function () {
          return Promise.all([n.e(0), n.e(3), n.e(7)]).then(n.bind(null, 247))
        }),
        ee = Object(u.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(2), n.e(11)]).then(
            n.bind(null, 252),
          )
        }),
        te = Object(u.lazy)(function () {
          return Promise.all([n.e(0), n.e(10)]).then(n.bind(null, 254))
        })
      var ne = function () {
        var e = Object(l.b)()
        return (
          Object(u.useEffect)(
            function () {
              localStorage.getItem('token') && e(Object(J.a)())
            },
            [e],
          ),
          Object(Q.jsxs)(Q.Fragment, {
            children: [
              Object(Q.jsx)(K.a, { autoClose: 2e3 }),
              Object(Q.jsx)(u.Suspense, {
                fallback: Object(Q.jsx)(Y.a, {}),
                children: Object(Q.jsxs)(B.d, {
                  children: [
                    Object(Q.jsx)(W, {
                      path: G.a.main,
                      exact: !0,
                      restricted: !0,
                      component: ee,
                      redirectTo: G.a.calculator,
                    }),
                    Object(Q.jsx)(W, {
                      path: G.a.auth,
                      restricted: !0,
                      component: Z,
                      redirectTo: G.a.diary,
                    }),
                    Object(Q.jsx)(W, {
                      path: G.a.reg,
                      restricted: !0,
                      component: te,
                      redirectTo: G.a.diary,
                    }),
                    Object(Q.jsx)(X, { path: G.a.calculator, component: $ }),
                    Object(Q.jsx)(X, { path: G.a.diary, component: _ }),
                  ],
                }),
              }),
            ],
          })
        )
      }
      d.a.render(
        Object(Q.jsx)(b.a, {
          children: Object(Q.jsx)(s.a.StrictMode, {
            children: Object(Q.jsx)(l.a, {
              store: A,
              children: Object(Q.jsx)(j.a, {
                loading: null,
                persistor: D,
                children: Object(Q.jsx)(ne, {}),
              }),
            }),
          }),
        }),
        document.getElementById('root'),
      )
    },
    18: function (e, t, n) {
      'use strict'
      t.a = {
        main: '/',
        auth: '/auth',
        reg: '/registration',
        calculator: '/calculator',
        diary: '/diary',
      }
    },
    20: function (e, t, n) {
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
      t.a = r
    },
    28: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return r
      }),
        n.d(t, 'c', function () {
          return o
        }),
        n.d(t, 'a', function () {
          return a
        })
      var c = n(3),
        r = Object(c.b)('contact/AddContactRequest'),
        o = Object(c.b)('contact/addContactSuccess'),
        a = Object(c.b)('contact/addContactError')
    },
    31: function (e, t, n) {
      'use strict'
      var c = n(52),
        r = n
          .n(c)
          .a.create({ baseURL: 'https://slim-mom-backend.herokuapp.com' })
      r.interceptors.request.use(function (e) {
        var t = localStorage.getItem('token')
        return (
          console.log(t),
          (e.headers.Authorization = t ? 'Bearer '.concat(t) : ''),
          e
        )
      }),
        (t.a = r)
    },
    34: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      }),
        n.d(t, 'b', function () {
          return r
        })
      var c = function (e) {
          return e.user.isLoggedOn
        },
        r = function (e) {
          return e.user.name
        }
    },
    49: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      }),
        n.d(t, 'b', function () {
          return i
        }),
        n.d(t, 'd', function () {
          return d
        }),
        n.d(t, 'c', function () {
          return l
        })
      var c = n(43),
        r = n.n(c),
        o = n(51),
        a = n(31),
        u = n(9),
        s = function () {
          return (function () {
            var e = Object(o.a)(
              r.a.mark(function e(t, n) {
                var c
                return r.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            t(Object(u.j)()),
                            (e.prev = 1),
                            (e.next = 4),
                            a.a.get('/users/current')
                          )
                        case 4:
                          ;(c = e.sent),
                            console.log('response.data from getUser', c.data),
                            t(Object(u.b)(c.data)),
                            (e.next = 12)
                          break
                        case 9:
                          ;(e.prev = 9),
                            (e.t0 = e.catch(1)),
                            t(Object(u.c)(e.t0.message))
                        case 12:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [[1, 9]],
                )
              }),
            )
            return function (t, n) {
              return e.apply(this, arguments)
            }
          })()
        },
        i = function (e) {
          return function (t, n) {
            t(Object(u.d)()),
              a.a
                .post('/users/login', e)
                .then(function (e) {
                  var n = e.data
                  localStorage.setItem('token', n.token), t(Object(u.e)(n))
                })
                .catch(function (e) {
                  t(Object(u.c)(e.message))
                })
          }
        },
        d = function (e) {
          return function (t, n) {
            console.log("log from signUp, this is 'payload':", e)
            var c = e.name,
              r = e.email,
              o = e.password
            t(Object(u.j)()),
              a.a
                .post('/users/signup', { name: c, email: r, password: o })
                .then(function (e) {
                  var n = e.data
                  localStorage.setItem('token', n.token), t(Object(u.k)(n))
                })
                .catch(function (e) {
                  t(Object(u.i)(e.message))
                })
          }
        },
        l = function (e) {
          return function (t, n) {
            t(Object(u.g)()),
              a.a
                .post('/users/logout', e)
                .then(function () {
                  localStorage.removeItem('token'), t(Object(u.h)())
                })
                .catch(function (e) {
                  return t(Object(u.f)(e.message))
                })
          }
        }
    },
    63: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
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
        var e = a()
        return Object(o.jsx)('div', {
          className: e.root,
          children: Object(o.jsx)(r.a, { color: 'inherit' }),
        })
      }
    },
    9: function (e, t, n) {
      'use strict'
      n.d(t, 'j', function () {
        return u
      }),
        n.d(t, 'k', function () {
          return s
        }),
        n.d(t, 'i', function () {
          return i
        }),
        n.d(t, 'b', function () {
          return d
        }),
        n.d(t, 'd', function () {
          return l
        }),
        n.d(t, 'e', function () {
          return b
        }),
        n.d(t, 'c', function () {
          return j
        }),
        n.d(t, 'g', function () {
          return O
        }),
        n.d(t, 'h', function () {
          return f
        }),
        n.d(t, 'f', function () {
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
            onSignUpRequest: function (e) {
              e.isLoading = !0
            },
            onSignUpSuccess: function (e, t) {
              var n = t.payload
              ;(e.name = n.name),
                (e.email = n.email),
                (e.token = n.token),
                (e.isLoggedOn = !!n.token)
            },
            onSignUpFailure: function (e, t) {
              var n = t.payload
              ;(e.error = n.message), (e.isLoggedOn = !1), (e.isLoading = !1)
            },
            onLoginRequest: function (e) {
              e.isLoading = !0
            },
            onLoginSuccess: function (e, t) {
              var n = t.payload
              ;(e.name = n.name),
                (e.email = n.email),
                (e.token = n.token),
                (e.isLoggedOn = !0),
                (e.isLoading = !1)
            },
            onLoginFailure: function (e, t) {
              var n = t.payload
              ;(e.error = n.message), (e.isLoggedOn = !1), (e.isLoading = !1)
            },
            onLogoutRequest: function (e) {
              e.isLoading = !0
            },
            onLogoutSuccess: function (e, t) {
              t.payload
              ;(e.name = ''),
                (e.email = ''),
                (e.token = ''),
                (e.isLoading = !1),
                (e.isLoggedOn = !1)
            },
            onLogoutFailure: function (e, t) {
              var n = t.payload
              ;(e.error = n.message), (e.isLoading = !1)
            },
            onGetUser: function (e, t) {
              var n = t.payload
              ;(e.name = n.name),
                (e.email = n.email),
                (e.isLoggedOn = !0),
                (e.isLoading = !1)
            },
          },
        }),
        o = r.actions,
        a = r.reducer,
        u = o.onSignUpRequest,
        s = o.onSignUpSuccess,
        i = o.onSignUpFailure,
        d = (o.onLogout, o.onGetUser),
        l = o.onLoginRequest,
        b = o.onLoginSuccess,
        j = o.onLoginFailure,
        O = o.onLogoutRequest,
        f = o.onLogoutSuccess,
        g = o.onLogoutFailure
      console.log(o), (t.a = a)
    },
    92: function (e, t, n) {},
  },
  [[116, 5, 6]],
])
//# sourceMappingURL=main.a36ee865.chunk.js.map
