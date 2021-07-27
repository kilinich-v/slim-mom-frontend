;(this['webpackJsonpslim-mom-frontend'] =
  this['webpackJsonpslim-mom-frontend'] || []).push([
  [0],
  {
    106: function (e, t, a) {},
    133: function (e, t, a) {
      'use strict'
      a.r(t)
      var n,
        o = a(0),
        r = a.n(o),
        c = a(12),
        i = a.n(c),
        l = a(57),
        s = a(30),
        d = a(28),
        b = a(7),
        j = a(23),
        u = Object(d.b)('contact/AddContactRequest'),
        p = Object(d.b)('contact/addContactSuccess'),
        m = Object(d.b)('contact/addContactError'),
        h = Object(d.c)(
          { kcal: null, productsNotRecommended: null },
          Object(b.a)({}, p, function (e, t) {
            return t.payload
          }),
        ),
        x = Object(d.c)(
          null,
          Object(b.a)({}, m, function (e, t) {
            return t.payload
          }),
        ),
        O = Object(d.c)(
          !1,
          ((n = {}),
          Object(b.a)(n, u, function () {
            return !0
          }),
          Object(b.a)(n, p, function () {
            return !1
          }),
          Object(b.a)(n, m, function () {
            return !1
          }),
          n),
        ),
        f = Object(j.b)({ calcData: h, error: x, loading: O }),
        g = { store: Object(d.a)({ reducer: { kcal: f } }) },
        w = (a(106), a(14)),
        v = '/',
        y = '/auth',
        C = '/registration',
        S = '/calculator',
        k = '/diary',
        N = a(2)
      function F(e) {
        var t = e.children
        return Object(N.jsx)('div', { className: 'container', children: t })
      }
      var B = a(17),
        _ = a(170),
        R = a(60),
        I = a(5),
        D = a(169),
        z = a(65),
        H = a.n(z),
        X = a(66),
        M = a.n(X),
        P = a(85),
        V = a(86),
        T = a.n(V),
        W = a(87),
        E = a(168),
        L = a(172),
        q = a(173),
        A = a(167),
        Y = a(171),
        G = Object(I.a)({
          root: { color: '#9b9faa', '&$checked': { color: R.a[600] } },
          checked: {},
        })(function (e) {
          return Object(N.jsx)(Y.a, Object(W.a)({}, e))
        }),
        J = Object(A.a)(function (e) {
          return { formControl: { color: '#9b9faa' } }
        })
      function $(e) {
        var t = e.onChange,
          a = J()
        return Object(N.jsxs)(L.a, {
          row: !0,
          'aria-label': 'groupBlood',
          name: 'groupBlood',
          defaultValue: 'top',
          onChange: t,
          style: { justifyContent: 'space-between' },
          children: [
            Object(N.jsx)(E.a, {
              component: 'legend',
              style: {
                width: 240,
                fontSize: '17px',
                fontFamily: 'Verdana',
                color: '#9b9faa',
              },
              children:
                '\u0413\u0440\u0443\u043f\u043f\u0430 \u043a\u0440\u043e\u0432\u0438',
            }),
            Object(N.jsx)(q.a, {
              className: a.formControl,
              value: '1',
              control: Object(N.jsx)(G, {}),
              label: '1',
              labelPlacement: 'End',
            }),
            Object(N.jsx)(q.a, {
              className: a.formControl,
              value: '2',
              control: Object(N.jsx)(G, {}),
              label: '2',
              labelPlacement: 'End',
            }),
            Object(N.jsx)(q.a, {
              className: a.formControl,
              value: '3',
              control: Object(N.jsx)(G, {}),
              label: '3',
              labelPlacement: 'End',
            }),
            Object(N.jsx)(q.a, {
              className: a.formControl,
              value: '4',
              control: Object(N.jsx)(G, {}),
              label: '4',
            }),
          ],
        })
      }
      var K = Object(I.a)(function (e) {
          var t
          return {
            root:
              ((t = {
                width: '176px',
                height: '44px',
                borderRadius: '30px',
                fontFamily: 'verdana',
                fontSize: '14px',
                lineHeight: '1.21',
                letterSpacing: '0.04em',
                color: 'white',
                boxShadow: '0px 4px 10px rgba(252, 132, 45, 0.5)',
                marginTop: '115px',
                backgroundColor: R.a[500],
                '&:hover': { backgroundColor: R.a[700] },
              }),
              Object(b.a)(t, e.breakpoints.down('768'), { bottom: '0' }),
              Object(b.a)(t, e.breakpoints.down('1200'), { left: '0' }),
              t),
          }
        })(D.a),
        Q = Object(I.a)(function (e) {
          var t
          return {
            root:
              ((t = { '&:not(:last-child)': { marginBottom: '30px' } }),
              Object(b.a)(t, e.breakpoints.down('768'), {
                marginBottom: '30px',
              }),
              Object(b.a)(t, 'width', 240),
              Object(b.a)(t, '& label', {
                fontSize: '17px',
                lineHeight: '1.21',
                letterSpacing: '0.04em',
                fontFamily: 'Verdana',
                color: '#9b9faa',
              }),
              Object(b.a)(t, '& label.Mui-focused', { color: R.a[500] }),
              Object(b.a)(t, '& .MuiInput-underline:after', {
                borderBottomColor: R.a[500],
              }),
              t),
          }
        })(_.a)
      function U() {
        var e = Object(o.useState)(!1),
          t = Object(B.a)(e, 2),
          a = t[0],
          n = t[1],
          r = Object(o.useState)(''),
          c = Object(B.a)(r, 2),
          i = c[0],
          s = c[1],
          d = Object(o.useState)(''),
          b = Object(B.a)(d, 2),
          j = b[0],
          h = b[1],
          x = Object(o.useState)(''),
          O = Object(B.a)(x, 2),
          f = O[0],
          g = O[1],
          w = Object(o.useState)(''),
          v = Object(B.a)(w, 2),
          y = v[0],
          C = v[1],
          S = Object(o.useState)(''),
          k = Object(B.a)(S, 2),
          F = k[0],
          _ = k[1],
          R = Object(l.b)()
        Object(o.useEffect)(function () {
          n(!0)
        }, [])
        var I = function (e) {
            var t = e.target,
              a = t.name,
              n = t.value,
              o = t.defaultValue
            switch (a) {
              case 'growth':
                s(n)
                break
              case 'age':
                h(n)
                break
              case 'weight':
                g(n)
                break
              case 'desiredWeight':
                C(n)
                break
              case 'groupBlood':
                _(o)
            }
          },
          D = function () {
            s(''), h(''), g(''), C(''), _('')
          }
        return Object(N.jsxs)(N.Fragment, {
          children: [
            Object(N.jsx)('h1', {
              className: H.a.title,
              style: {
                transform: a ? 'translateY(0)' : 'translateY(-101%)',
                opacity: a ? '1' : '0',
              },
              children:
                '\u041f\u0440\u043e\u0441\u0447\u0438\u0442\u0430\u0439 \u0441\u0432\u043e\u044e \u0441\u0443\u0442\u043e\u0447\u043d\u0443\u044e \u043d\u043e\u0440\u043c\u0443 \u043a\u0430\u043b\u043e\u0440\u0438\u0439 \u043f\u0440\u044f\u043c\u043e \u0441\u0435\u0439\u0447\u0430\u0441',
            }),
            Object(N.jsxs)('form', {
              onSubmit: function (e) {
                e.preventDefault(),
                  R(
                    (function (e, t, a, n, o) {
                      return (function () {
                        var r = Object(P.a)(
                          M.a.mark(function r(c) {
                            var i, l
                            return M.a.wrap(
                              function (r) {
                                for (;;)
                                  switch ((r.prev = r.next)) {
                                    case 0:
                                      return (
                                        c(u()),
                                        (r.prev = 1),
                                        (r.next = 4),
                                        T.a.post(
                                          'http://localhost:3001/api/users/public',
                                          {
                                            growth: e,
                                            age: t,
                                            weight: a,
                                            desiredWeight: n,
                                            groupBlood: o,
                                          },
                                        )
                                      )
                                    case 4:
                                      ;(i = r.sent),
                                        (l = i.data),
                                        c(p(l)),
                                        (r.next = 12)
                                      break
                                    case 9:
                                      ;(r.prev = 9),
                                        (r.t0 = r.catch(1)),
                                        c(m(r.t0.message))
                                    case 12:
                                    case 'end':
                                      return r.stop()
                                  }
                              },
                              r,
                              null,
                              [[1, 9]],
                            )
                          }),
                        )
                        return function (e) {
                          return r.apply(this, arguments)
                        }
                      })()
                    })(i, j, f, y, F),
                  ),
                  D()
              },
              className: H.a.form,
              style: {
                transform: a ? 'translateX(0)' : 'translateX(-101%)',
                opacity: a ? '1' : '0',
              },
              noValidate: !0,
              autoComplete: 'off',
              children: [
                Object(N.jsxs)('div', {
                  children: [
                    Object(N.jsx)(Q, {
                      id: 'standard-basic',
                      label: '\u0420\u043e\u0441\u0442',
                      name: 'growth',
                      value: i,
                      onChange: I,
                    }),
                    Object(N.jsx)(Q, {
                      id: 'standard-basic',
                      label: '\u0412\u043e\u0437\u0440\u0430\u0441\u0442',
                      name: 'age',
                      value: j,
                      onChange: I,
                    }),
                    Object(N.jsx)(Q, {
                      id: 'standard-basic',
                      label:
                        '\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0432\u0435\u0441',
                      name: 'weight',
                      value: f,
                      onChange: I,
                    }),
                  ],
                }),
                Object(N.jsxs)('div', {
                  children: [
                    Object(N.jsx)(Q, {
                      id: 'standard-basic',
                      style: { marginBottom: 50 },
                      label:
                        '\u0416\u0435\u043b\u0430\u0435\u043c\u044b\u0439 \u0432\u0435\u0441',
                      name: 'desiredWeight',
                      value: y,
                      onChange: I,
                    }),
                    Object(N.jsx)($, { onChange: I }),
                    Object(N.jsx)(K, {
                      type: 'submit',
                      children:
                        '\u041f\u043e\u0445\u0443\u0434\u0435\u0442\u044c',
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }
      var Z = a(47),
        ee = a.n(Z)
      function te(e) {
        var t = Object(o.useState)(!1),
          a = Object(B.a)(t, 2),
          n = a[0],
          r = a[1]
        return (
          Object(o.useEffect)(function () {
            r(!0)
          }, []),
          Object(N.jsxs)('div', {
            style: { position: 'relative', width: '100%' },
            children: [
              Object(N.jsx)('div', {
                className: ee.a.Green,
                style: {
                  transform: n ? 'translateY(0)' : 'translateY(-101%)',
                  opacity: n ? '1' : '0',
                },
              }),
              Object(N.jsx)('div', {
                className: ee.a.Banana,
                style: {
                  transform: n ? 'translateX(0)' : 'translateX(101%)',
                  opacity: n ? '1' : '0',
                },
              }),
              Object(N.jsx)('div', {
                className: ee.a.Strawberry,
                style: {
                  transform: n ? 'translateX(0)' : 'translateX(101%)',
                  opacity: n ? '1' : '0',
                },
              }),
              Object(N.jsx)('div', {
                className: ee.a.DecoreLaptop,
                style: {
                  transform: n ? 'translateX(0)' : 'translateX(101%)',
                  opacity: n ? '1' : '0',
                },
              }),
            ],
          })
        )
      }
      var ae = function () {
          return Object(N.jsxs)(N.Fragment, {
            children: [
              Object(N.jsx)(te, {}),
              Object(N.jsx)(F, { children: Object(N.jsx)(U, {}) }),
            ],
          })
        },
        ne = Object(A.a)(function (e) {
          return {
            root: Object(b.a)(
              {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '510px',
                marginBottom: '30px',
                justifyContent: 'space-between',
              },
              e.breakpoints.down('768'),
              { width: '240px', height: '354px', alignContent: 'flex-start' },
            ),
            title: {
              fontWeight: 'bold',
              fontSize: '14px',
              lineHeight: '13px',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginLeft: '134px',
              color: R.a[600],
            },
          }
        }),
        oe = Object(I.a)(function (e) {
          var t
          return {
            root:
              ((t = {
                borderRadius: '30px',
                width: '176px',
                height: '44px',
                color: 'white',
                marginBottom: '20px',
                backgroundColor: R.a[500],
                '&:hover': { backgroundColor: R.a[700] },
              }),
              Object(b.a)(t, e.breakpoints.down('768'), { bottom: '0' }),
              Object(b.a)(t, e.breakpoints.down('1200'), { left: '0' }),
              t),
          }
        })(D.a),
        re = Object(I.a)(function (e) {
          var t
          return {
            root:
              ((t = {
                borderRadius: '30px',
                width: '176px',
                height: '44px',
                color: '#FC842D',
                marginBottom: '20px',
                border: '2px solid #FC842D',
                boxSizing: 'border-box',
                backgroundColor: '#FFFFFF',
                '&:hover': { backgroundColor: R.a[700], color: 'white' },
              }),
              Object(b.a)(t, e.breakpoints.down('768'), { bottom: '0' }),
              Object(b.a)(t, e.breakpoints.down('1200'), { left: '0' }),
              t),
          }
        })(D.a),
        ce = Object(I.a)({
          root: {
            marginBottom: '20px',
            '& label': { fontSize: '14px' },
            '& label.Mui-focused': { color: R.a[500] },
            '& .MuiInput-underline:after': { borderBottomColor: R.a[500] },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: R.a[500] },
              '&:hover fieldset': { borderColor: R.a[500] },
              '&.Mui-focused fieldset': { borderColor: R.a[500] },
            },
          },
        })(_.a)
      function ie() {
        var e = ne(),
          t = Object(o.useState)(''),
          a = Object(B.a)(t, 2),
          n = (a[0], a[1]),
          r = Object(o.useState)(''),
          c = Object(B.a)(r, 2),
          i = (c[0], c[1]),
          l = Object(o.useState)(!1),
          s = Object(B.a)(l, 2),
          d = s[0],
          b = s[1]
        Object(o.useEffect)(function () {
          b(!0)
        }, [])
        return Object(N.jsxs)('div', {
          style: {
            transform: d ? 'translateX(0)' : 'translateX(-101%)',
            opacity: d ? '1' : '0',
          },
          children: [
            Object(N.jsx)('h3', {
              className: e.title,
              children: '\u0432\u0445\u043e\u0434',
            }),
            Object(N.jsxs)('form', {
              className: e.root,
              noValidate: !0,
              autoComplete: 'off',
              onSubmit: function (e) {
                e.preventDefault(), n(''), i('')
              },
              children: [
                Object(N.jsx)(ce, {
                  required: !0,
                  id: 'standard-password-input',
                  label: '\u041b\u043e\u0433\u0438\u043d ',
                  type: 'login',
                  autoComplete: 'current-login',
                  style: { width: 240 },
                  onChange: function (e) {
                    var t = e.target
                    return n(t.value)
                  },
                }),
                Object(N.jsx)(ce, {
                  required: !0,
                  id: 'standard-password-input',
                  label: '\u041f\u0430\u0440\u043e\u043b\u044c ',
                  type: 'password',
                  autoComplete: 'current-password',
                  style: { width: 240 },
                  onChange: function (e) {
                    var t = e.target
                    return i(t.value)
                  },
                }),
                Object(N.jsx)(oe, {
                  type: 'submit',
                  children: '\u0412\u0445\u043e\u0434',
                }),
                Object(N.jsx)(re, {
                  type: 'submit',
                  children:
                    '\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f',
                }),
              ],
            }),
          ],
        })
      }
      var le = function () {
          return Object(N.jsxs)('div', {
            children: [
              Object(N.jsx)(te, {}),
              Object(N.jsx)(F, { children: Object(N.jsx)(ie, {}) }),
            ],
          })
        },
        se = Object(A.a)(function (e) {
          return {
            root: Object(b.a)(
              {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '510px',
                marginBottom: '30px',
                justifyContent: 'space-between',
              },
              e.breakpoints.down('768'),
              { width: '240px', height: '354px', alignContent: 'flex-start' },
            ),
            title: {
              fontWeight: 'bold',
              fontSize: '14px',
              lineHeight: '13px',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginLeft: '134px',
              color: R.a[600],
            },
          }
        }),
        de = Object(I.a)(function (e) {
          var t
          return {
            root:
              ((t = {
                borderRadius: '30px',
                width: '176px',
                height: '44px',
                color: 'white',
                marginBottom: '20px',
                backgroundColor: R.a[500],
                '&:hover': { backgroundColor: R.a[700] },
              }),
              Object(b.a)(t, e.breakpoints.down('768'), { bottom: '0' }),
              Object(b.a)(t, e.breakpoints.down('1200'), { left: '0' }),
              t),
          }
        })(D.a),
        be = Object(I.a)(function (e) {
          var t
          return {
            root:
              ((t = {
                borderRadius: '30px',
                width: '176px',
                height: '44px',
                color: '#FC842D',
                marginBottom: '20px',
                border: '2px solid #FC842D',
                boxSizing: 'border-box',
                backgroundColor: '#FFFFFF',
                '&:hover': { backgroundColor: R.a[700], color: 'white' },
              }),
              Object(b.a)(t, e.breakpoints.down('768'), { bottom: '0' }),
              Object(b.a)(t, e.breakpoints.down('1200'), { left: '0' }),
              t),
          }
        })(D.a),
        je = Object(I.a)({
          root: {
            marginBottom: '20px',
            '& label': { fontSize: '14px' },
            '& label.Mui-focused': { color: R.a[500] },
            '& .MuiInput-underline:after': { borderBottomColor: R.a[500] },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: R.a[500] },
              '&:hover fieldset': { borderColor: R.a[500] },
              '&.Mui-focused fieldset': { borderColor: R.a[500] },
            },
          },
        })(_.a)
      function ue() {
        var e = se(),
          t = Object(o.useState)(''),
          a = Object(B.a)(t, 2),
          n = (a[0], a[1]),
          r = Object(o.useState)(''),
          c = Object(B.a)(r, 2),
          i = (c[0], c[1]),
          l = Object(o.useState)(''),
          s = Object(B.a)(l, 2),
          d = (s[0], s[1]),
          b = Object(o.useState)(!1),
          j = Object(B.a)(b, 2),
          u = j[0],
          p = j[1]
        Object(o.useEffect)(function () {
          p(!0)
        }, [])
        return Object(N.jsxs)('div', {
          style: {
            transform: u ? 'translateX(0)' : 'translateX(-101%)',
            opacity: u ? '1' : '0',
          },
          children: [
            Object(N.jsx)('h3', {
              className: e.title,
              children:
                '\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f',
            }),
            Object(N.jsxs)('form', {
              className: e.root,
              noValidate: !0,
              autoComplete: 'off',
              onSubmit: function (e) {
                e.preventDefault(), i(''), n(''), d('')
              },
              children: [
                Object(N.jsx)(je, {
                  required: !0,
                  id: 'standard-name-input',
                  label: '\u0418\u043c\u044f',
                  type: 'Name',
                  autoComplete: 'current-name',
                  style: { width: 240 },
                  onChange: function (e) {
                    var t = e.target
                    return i(t.value)
                  },
                }),
                Object(N.jsx)(je, {
                  required: !0,
                  id: 'standard-password-input',
                  label: '\u041b\u043e\u0433\u0438\u043d',
                  type: 'login',
                  autoComplete: 'current-login',
                  style: { width: 240 },
                  onChange: function (e) {
                    var t = e.target
                    return n(t.value)
                  },
                }),
                Object(N.jsx)(je, {
                  required: !0,
                  id: 'standard-password-input',
                  label: '\u041f\u0430\u0440\u043e\u043b\u044c',
                  type: 'password',
                  autoComplete: 'current-password',
                  style: { width: 240 },
                  onChange: function (e) {
                    var t = e.target
                    return d(t.value)
                  },
                }),
                Object(N.jsx)(de, {
                  type: 'submit',
                  children: '\u0412\u0445\u043e\u0434',
                }),
                Object(N.jsx)(be, {
                  type: 'submit',
                  children:
                    '\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f',
                }),
              ],
            }),
          ],
        })
      }
      var pe = function () {
          return Object(N.jsxs)('div', {
            children: [
              Object(N.jsx)(te, {}),
              Object(N.jsx)(F, { children: Object(N.jsx)(ue, {}) }),
            ],
          })
        },
        me = function () {
          return Object(N.jsx)('div', {
            children: Object(N.jsx)(F, { children: Object(N.jsx)(U, {}) }),
          })
        },
        he = a(89),
        xe = a.p + 'static/media/RightSideBarImgDesktop.07ec7143.png',
        Oe = a.p + 'static/media/RightSideBarImgTablet.e53c0e68.png',
        fe = Object(he.a)({
          section: {
            backgroundColor: '#F0F1F3',
            '@media screen and (max-width: 1199px) and (min-width: 768px)': {
              backgroundImage: 'url('.concat(Oe, ')'),
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'bottom right',
            },
            '@media (min-width: 1024px)': {
              backgroundImage: 'url('.concat(xe, ')'),
              backgroundPosition: 'right',
              backgroundRepeat: 'no-repeat',
              height: 850,
              width: 535,
            },
          },
          container: {
            width: '100%',
            paddingLeft: 15,
            paddingRight: 15,
            marginRight: 'auto',
            marginLeft: 'auto',
            '@media screen and (max-width: 767px) and (min-width: 320px)': {
              height: 433,
              width: 320,
            },
            '@media screen and (max-width: 1199px) and (min-width: 768px)': {
              display: 'flex',
              height: 350,
              width: 768,
              paddingLeft: 87,
              paddingRight: 39,
            },
            '@media (min-width: 1024px)': {
              display: 'flex',
              flexDirection: 'column',
            },
          },
          box: {
            height: 152,
            width: 290,
            paddingTop: 40,
            '@media screen and (max-width: 1199px) and (min-width: 768px)': {
              paddingTop: 91,
              paddingBottom: 91,
              width: 250,
              height: 168,
              '&:not(:last-child)': { marginRight: 70 },
            },
            '@media (min-width: 1024px)': {
              paddingLeft: 90,
              paddingRight: 115,
              '&:first-child': { paddingTop: 275, paddingBottom: 60 },
            },
          },
          title: {
            fontFamily: 'Verdana',
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: 700,
            letterSpacing: '0.04em',
            color: '#212121',
            marginBottom: 20,
            padding: 0,
            margin: 0,
            '@media (min-width: 1024px)': { '&:last-child': { marginTop: 40 } },
          },
          list: {
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'Verdana',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 14,
            linehHeight: 17,
            letterSpacing: '0.04em',
            listStyle: 'none',
            color: '#9B9FAA',
            '&:not(:last-child)': { marginBottom: 10 },
            '@media (min-width: 1024px)': {},
          },
          ul: { padding: 0, margin: 0 },
          text: {
            padding: 0,
            margin: 0,
            fontFamily: 'Verdana',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 14,
            linehHeight: 17,
            letterSpacing: '0.04em',
            color: '#9B9FAA',
          },
        }),
        ge = function () {
          var e = fe()
          return Object(N.jsx)('div', {
            children: Object(N.jsx)('section', {
              className: e.section,
              children: Object(N.jsxs)('div', {
                className: e.container,
                children: [
                  Object(N.jsxs)('div', {
                    className: e.box,
                    children: [
                      Object(N.jsx)('h3', {
                        className: e.title,
                        children:
                          '\u0421\u0432\u043e\u0434\u043a\u0430 \u0437\u0430 \u0434\u0430\u0442\u0443',
                      }),
                      Object(N.jsxs)('ul', {
                        className: e.ul,
                        children: [
                          Object(N.jsxs)('li', {
                            className: e.list,
                            children: [
                              Object(N.jsx)('p', {
                                className: e.ul,
                                children:
                                  '\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c',
                              }),
                              ' ',
                              Object(N.jsx)('p', {
                                className: e.ul,
                                children: '000 \u043a\u043a\u0430\u043b',
                              }),
                            ],
                          }),
                          Object(N.jsxs)('li', {
                            className: e.list,
                            children: [
                              Object(N.jsx)('p', {
                                className: e.ul,
                                children:
                                  '\u0423\u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u043e',
                              }),
                              ' ',
                              Object(N.jsx)('p', {
                                className: e.ul,
                                children: ' 000 \u043a\u043a\u0430\u043b',
                              }),
                            ],
                          }),
                          Object(N.jsxs)('li', {
                            className: e.list,
                            children: [
                              Object(N.jsx)('p', {
                                className: e.ul,
                                children:
                                  '\u0414\u043d\u0435\u0432\u043d\u0430\u044f',
                              }),
                              ' ',
                              Object(N.jsx)('p', {
                                className: e.ul,
                                children: '000 \u043a\u043a\u0430\u043b',
                              }),
                            ],
                          }),
                          Object(N.jsxs)('li', {
                            className: e.list,
                            children: [
                              Object(N.jsx)('p', {
                                className: e.ul,
                                children:
                                  'n% \u043e\u0442 \u043d\u043e\u0440\u043c\u044b',
                              }),
                              ' ',
                              Object(N.jsx)('p', {
                                className: e.ul,
                                children: '000 \u043a\u043a\u0430\u043b',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(N.jsxs)('div', {
                    className: e.box,
                    children: [
                      Object(N.jsx)('h3', {
                        className: e.title,
                        children:
                          '\u041d\u0435\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c\u044b\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b',
                      }),
                      Object(N.jsx)('p', {
                        className: e.list,
                        children:
                          '\u0417\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0412\u0430\u0448 \u0440\u0430\u0446\u0438\u043e\u043d',
                      }),
                    ],
                  }),
                ],
              }),
            }),
          })
        },
        we = function () {
          return Object(N.jsx)('div', {
            children: Object(N.jsx)(F, { children: Object(N.jsx)(ge, {}) }),
          })
        }
      a(37)
      var ve = function () {
        return Object(N.jsx)(N.Fragment, {
          children: Object(N.jsxs)(w.c, {
            children: [
              Object(N.jsx)(w.a, { exact: !0, path: v, component: ae }),
              Object(N.jsx)(w.a, { path: y, component: le }),
              Object(N.jsx)(w.a, { path: C, component: pe }),
              Object(N.jsx)(w.a, { path: S, component: me }),
              Object(N.jsx)(w.a, { path: k, component: we }),
            ],
          }),
        })
      }
      i.a.render(
        Object(N.jsx)(l.a, {
          store: g.store,
          children: Object(N.jsx)(s.a, {
            children: Object(N.jsx)(r.a.StrictMode, {
              children: Object(N.jsx)(ve, {}),
            }),
          }),
        }),
        document.getElementById('root'),
      )
    },
    37: function (e, t, a) {
      e.exports = {
        nav: 'Header_nav__37t1d',
        logo: 'Header_logo__1V_o-',
        link: 'Header_link__269xy',
      }
    },
    47: function (e, t, a) {
      e.exports = {
        DecoreLaptop: 'ContentImagesHomePage_DecoreLaptop__3S_ku',
        Banana: 'ContentImagesHomePage_Banana__18RWo',
        Strawberry: 'ContentImagesHomePage_Strawberry__3T0uO',
        Green: 'ContentImagesHomePage_Green__4wPWy',
      }
    },
    65: function (e, t, a) {
      e.exports = {
        title: 'CalcForm_title__2nRzP',
        form: 'CalcForm_form__To8O3',
      }
    },
  },
  [[133, 1, 2]],
])
//# sourceMappingURL=main.07371c65.chunk.js.map
