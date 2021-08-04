;(this['webpackJsonpslim-mom-frontend'] =
  this['webpackJsonpslim-mom-frontend'] || []).push([
  [9],
  {
    137: function (e, t, a) {
      e.exports = {
        nav: 'Header_nav__37t1d',
        logo: 'Header_logo__1V_o-',
        link: 'Header_link__269xy',
        active: 'Header_active__3MHke',
        authLink: 'Header_authLink__2v2Nu',
        linkActive: 'Header_linkActive__2idf2',
        userInfo: 'Header_userInfo__wJvAC',
        userLogin: 'Header_userLogin__22n3f',
        exitButton: 'Header_exitButton__2v4XM',
        userInfoNav: 'Header_userInfoNav__V0Q9q',
        linkBurger: 'Header_linkBurger__3Z5pc',
        listBurger: 'Header_listBurger__3CEXm',
        listBurgerItem: 'Header_listBurgerItem__rH0ms',
        menuButton: 'Header_menuButton__177Te',
        closeButton: 'Header_closeButton__2YVK3',
        BigLogo: 'Header_BigLogo__3ApKw',
      }
    },
    142: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return r
      })
      var n = a(2)
      function r(e) {
        var t = e.children
        return Object(n.jsx)('div', { className: 'container', children: t })
      }
    },
    160: function (e, t, a) {
      e.exports = {
        contentContainer: 'ContentImagesRegPage_contentContainer__1SNM4',
        DecoreLaptop: 'ContentImagesRegPage_DecoreLaptop__3T5-O',
        Banana: 'ContentImagesRegPage_Banana__3Aqk6',
        Strawberry: 'ContentImagesRegPage_Strawberry__1E3gS',
        Green: 'ContentImagesRegPage_Green__Cjzf7',
      }
    },
    165: function (e, t, a) {
      'use strict'
      a(0)
      var n = a(23),
        r = a(29),
        o = a(137),
        i = a.n(o),
        c = a(34),
        s = a(138),
        l = a(2)
      t.a = function () {
        var e = Object(n.c)(c.a),
          t = Object(s.a)()
        return Object(l.jsx)(l.Fragment, {
          children: Object(l.jsxs)('div', {
            className: i.a.nav,
            children: [
              Object(l.jsx)(r.b, { to: '/', exact: !0, className: i.a.logo }),
              !e &&
                t < 1280 &&
                Object(l.jsxs)('div', {
                  children: [
                    Object(l.jsx)(r.b, {
                      to: '/auth',
                      exact: !0,
                      className: i.a.authLink,
                      activeClassName: i.a.linkActive,
                      children: '\u0412\u0425\u041e\u0414',
                    }),
                    Object(l.jsx)(r.b, {
                      to: '/registration',
                      exact: !0,
                      className: i.a.link,
                      activeClassName: i.a.linkActive,
                      children:
                        '\u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0410\u0426\u0418\u042f',
                    }),
                  ],
                }),
            ],
          }),
        })
      }
    },
    175: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return s
      })
      var n = a(135),
        r = a(0),
        o = a(160),
        i = a.n(o),
        c = a(2)
      function s() {
        var e = Object(r.useState)(!1),
          t = Object(n.a)(e, 2),
          a = t[0],
          o = t[1]
        return (
          Object(r.useEffect)(function () {
            o(!0)
          }, []),
          Object(c.jsxs)('div', {
            className: i.a.contentContainer,
            children: [
              Object(c.jsx)('div', {
                className: i.a.Green,
                style: {
                  transform: a ? 'translateY(0)' : 'translateY(-101%)',
                  opacity: a ? '1' : '0',
                },
              }),
              Object(c.jsx)('div', {
                className: i.a.Banana,
                style: {
                  transform: a ? 'translateX(0)' : 'translateX(101%)',
                  opacity: a ? '1' : '0',
                },
              }),
              Object(c.jsx)('div', {
                className: i.a.Strawberry,
                style: {
                  transform: a ? 'translateX(0)' : 'translateX(101%)',
                  opacity: a ? '1' : '0',
                },
              }),
              Object(c.jsx)('div', {
                className: i.a.DecoreLaptop,
                style: { opacity: a ? '1' : '0' },
              }),
            ],
          })
        )
      }
    },
    253: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a(142),
        r = a(175),
        o = a(135),
        i = a(5),
        c = a(0),
        s = a(23),
        l = a(29),
        u = a(117),
        d = a(246),
        b = a(41),
        j = a(47),
        p = a(244),
        x = a(49),
        m = a(18),
        f = a(2),
        _ = Object(u.a)(function (e) {
          var t
          return {
            root: Object(i.a)(
              {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '290px',
                marginBottom: '30px',
                justifyContent: 'space-between',
              },
              e.breakpoints.up('768'),
              { width: '382px', alignItems: 'start', marginLeft: '71' },
            ),
            title:
              ((t = {
                fontWeight: 'bold',
                fontSize: '14px',
                lineHeight: '13px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                textAlign: 'center',
                marginTop: '40px',
                color: b.a[600],
              }),
              Object(i.a)(t, e.breakpoints.up('768'), {
                marginTop: '157px',
                textAlign: 'left',
              }),
              Object(i.a)(t, e.breakpoints.up('1200'), { marginTop: '95px' }),
              t),
            button: Object(i.a)(
              { textAlign: 'center' },
              e.breakpoints.up('768'),
              {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '382px',
              },
            ),
          }
        }),
        g = Object(j.a)(function (e) {
          var t
          return {
            root:
              ((t = {
                borderRadius: '30px',
                width: '176px',
                height: '44px',
                color: 'white',
                marginBottom: '20px',
                backgroundColor: b.a[500],
                '&:hover': { backgroundColor: b.a[700] },
              }),
              Object(i.a)(t, e.breakpoints.down('768'), { bottom: '0' }),
              Object(i.a)(t, e.breakpoints.down('1200'), { left: '0' }),
              t),
          }
        })(p.a),
        O = Object(j.a)(function (e) {
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
                '&:hover': { backgroundColor: b.a[700], color: 'white' },
              }),
              Object(i.a)(t, e.breakpoints.down('768'), { bottom: '0' }),
              Object(i.a)(t, e.breakpoints.down('1200'), { left: '0' }),
              t),
          }
        })(p.a),
        v = Object(j.a)(function (e) {
          return {
            root: {
              marginBottom: '20px',
              '& label': { fontSize: '14px' },
              '& .MuiInput-underline': Object(i.a)(
                { width: '290px' },
                e.breakpoints.up('768'),
                { width: '239px' },
              ),
              '& label.Mui-focused': { color: b.a[500] },
              '& .MuiInput-underline:after': { borderBottomColor: b.a[500] },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: b.a[500] },
                '&:hover fieldset': { borderColor: b.a[500] },
                '&.Mui-focused fieldset': { borderColor: b.a[500] },
              },
            },
          }
        })(d.a)
      function h() {
        var e = Object(s.b)(),
          t = _(),
          a = Object(c.useState)(''),
          n = Object(o.a)(a, 2),
          r = n[0],
          i = n[1],
          u = Object(c.useState)(''),
          d = Object(o.a)(u, 2),
          b = d[0],
          j = d[1],
          p = Object(c.useState)(!1),
          h = Object(o.a)(p, 2),
          C = h[0],
          k = h[1]
        Object(c.useEffect)(function () {
          k(!0)
        }, [])
        return Object(f.jsx)('div', {
          style: {
            transform: C ? 'translateX(0)' : 'translateX(-101%)',
            opacity: C ? '1' : '0',
          },
          children: Object(f.jsxs)('div', {
            children: [
              Object(f.jsx)('h3', {
                className: t.title,
                children: '\u0432\u0445\u043e\u0434',
              }),
              Object(f.jsxs)('form', {
                className: t.root,
                noValidate: !0,
                autoComplete: 'off',
                onSubmit: function (t) {
                  t.preventDefault(),
                    e(Object(x.b)({ email: r, password: b })),
                    i(''),
                    j('')
                },
                children: [
                  Object(f.jsx)(v, {
                    required: !0,
                    id: 'standard-email-input',
                    label: '\u041b\u043e\u0433\u0438\u043d ',
                    type: 'email',
                    value: r,
                    autoComplete: 'current-login',
                    onChange: function (e) {
                      var t = e.target
                      return i(t.value)
                    },
                  }),
                  Object(f.jsx)(v, {
                    required: !0,
                    id: 'standard-password-input',
                    label: '\u041f\u0430\u0440\u043e\u043b\u044c ',
                    type: 'password',
                    value: b,
                    autoComplete: 'current-password',
                    onChange: function (e) {
                      var t = e.target
                      return j(t.value)
                    },
                  }),
                  Object(f.jsxs)('div', {
                    className: t.button,
                    children: [
                      Object(f.jsx)(g, {
                        type: 'submit',
                        children: '\u0412\u0445\u043e\u0434',
                      }),
                      Object(f.jsx)(l.b, {
                        to: m.a.reg,
                        children: Object(f.jsx)(O, {
                          type: 'submit',
                          children:
                            '\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      }
      var C = a(165)
      t.default = function () {
        return Object(f.jsxs)('div', {
          children: [
            Object(f.jsx)(r.a, {}),
            Object(f.jsx)(n.a, { children: Object(f.jsx)(C.a, {}) }),
            Object(f.jsx)(n.a, { children: Object(f.jsx)(h, {}) }),
          ],
        })
      }
    },
  },
])
//# sourceMappingURL=9.f4d688ad.chunk.js.map
