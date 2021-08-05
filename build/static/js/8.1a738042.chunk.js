;(this['webpackJsonpslim-mom-frontend'] =
  this['webpackJsonpslim-mom-frontend'] || []).push([
  [8],
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
      var n = a(246),
        r = a(41),
        i = a(47),
        o = Object(i.a)({
          root: {
            borderRadius: '30px',
            width: '176px',
            height: '44px',
            color: 'white',
            backgroundColor: '#FC842D',
            boxShadow: '0px 4px 10px rgba(252, 132, 45, 0.5)',
            fontFamily: 'Verdana',
            fontSize: '14px',
            lineHeight: '17px',
            letterSpacing: '0.04em',
            fontWeight: '700',
            textAlign: 'center',
            textTransform: 'capitalize',
            '&:hover': { backgroundColor: r.a[900] },
          },
        })(n.a)
      t.a = o
    },
    144: function (e, t, a) {
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
      var n = a(21),
        r = a(30),
        i = a(137),
        o = a.n(i),
        c = a(28),
        s = a(138),
        l = a(2)
      t.a = function () {
        var e = Object(n.c)(c.a),
          t = Object(s.a)()
        return Object(l.jsx)(l.Fragment, {
          children: Object(l.jsxs)('div', {
            className: o.a.nav,
            children: [
              Object(l.jsx)(r.b, { to: '/', exact: !0, className: o.a.logo }),
              !e &&
                t < 1280 &&
                Object(l.jsxs)('div', {
                  children: [
                    Object(l.jsx)(r.b, {
                      to: '/auth',
                      exact: !0,
                      className: o.a.authLink,
                      activeClassName: o.a.linkActive,
                      children: '\u0412\u0425\u041e\u0414',
                    }),
                    Object(l.jsx)(r.b, {
                      to: '/registration',
                      exact: !0,
                      className: o.a.link,
                      activeClassName: o.a.linkActive,
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
        i = a(160),
        o = a.n(i),
        c = a(2)
      function s() {
        var e = Object(r.useState)(!1),
          t = Object(n.a)(e, 2),
          a = t[0],
          i = t[1]
        return (
          Object(r.useEffect)(function () {
            i(!0)
          }, []),
          Object(c.jsxs)('div', {
            className: o.a.contentContainer,
            children: [
              Object(c.jsx)('div', {
                className: o.a.Green,
                style: {
                  transform: a ? 'translateY(0)' : 'translateY(-101%)',
                  opacity: a ? '1' : '0',
                },
              }),
              Object(c.jsx)('div', {
                className: o.a.Banana,
                style: {
                  transform: a ? 'translateX(0)' : 'translateX(101%)',
                  opacity: a ? '1' : '0',
                },
              }),
              Object(c.jsx)('div', {
                className: o.a.Strawberry,
                style: {
                  transform: a ? 'translateX(0)' : 'translateX(101%)',
                  opacity: a ? '1' : '0',
                },
              }),
              Object(c.jsx)('div', {
                className: o.a.DecoreLaptop,
                style: { opacity: a ? '1' : '0' },
              }),
            ],
          })
        )
      }
    },
    195: function (e, t, a) {
      e.exports = {
        regBtn: 'styles_regBtn__YdQEE',
        loginBtn: 'styles_loginBtn__2g-6Y',
      }
    },
    255: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a(144),
        r = a(175),
        i = a(135),
        o = a(4),
        c = a(0),
        s = a(21),
        l = a(30),
        u = a(117),
        d = a(248),
        b = a(41),
        j = a(47),
        p = a(49),
        g = a(18),
        x = a(142),
        _ = a(195),
        f = a.n(_),
        m = a(2),
        O = Object(u.a)(function (e) {
          var t, a
          return {
            root:
              ((t = {}),
              Object(o.a)(t, e.breakpoints.down('767'), {
                width: 289,
                margin: 0,
                marginLeft: 'auto',
                marginRight: 'auto',
              }),
              Object(o.a)(t, 'display', 'flex'),
              Object(o.a)(t, 'flexDirection', 'column'),
              Object(o.a)(t, 'alignItems', 'center'),
              Object(o.a)(t, 'width', '290px'),
              Object(o.a)(t, 'marginBottom', '30px'),
              Object(o.a)(t, 'justifyContent', 'space-between'),
              Object(o.a)(t, e.breakpoints.up('768'), {
                width: '382px',
                alignItems: 'start',
                marginLeft: '71',
              }),
              t),
            title:
              ((a = {
                fontWeight: 'bold',
                fontSize: '14px',
                lineHeight: '13px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                textAlign: 'center',
                marginTop: '40px',
                color: b.a[600],
              }),
              Object(o.a)(a, e.breakpoints.up('768'), {
                marginTop: '157px',
                textAlign: 'left',
              }),
              Object(o.a)(a, e.breakpoints.up('1200'), { marginTop: '95px' }),
              a),
            button: Object(o.a)(
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
        v = Object(j.a)(function (e) {
          return {
            root: {
              marginBottom: '20px',
              '& label': { fontSize: '14px' },
              '& .MuiInput-underline': Object(o.a)(
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
          t = O(),
          a = Object(c.useState)(''),
          n = Object(i.a)(a, 2),
          r = n[0],
          o = n[1],
          u = Object(c.useState)(''),
          d = Object(i.a)(u, 2),
          b = d[0],
          j = d[1],
          _ = Object(c.useState)(!1),
          h = Object(i.a)(_, 2),
          C = h[0],
          y = h[1]
        Object(c.useEffect)(function () {
          y(!0)
        }, [])
        return Object(m.jsx)('div', {
          style: {
            transform: C ? 'translateX(0)' : 'translateX(-101%)',
            opacity: C ? '1' : '0',
          },
          children: Object(m.jsxs)('div', {
            children: [
              Object(m.jsx)('h3', {
                className: t.title,
                children: '\u0432\u0445\u043e\u0434',
              }),
              Object(m.jsxs)('form', {
                className: t.root,
                noValidate: !0,
                autoComplete: 'off',
                onSubmit: function (t) {
                  t.preventDefault(),
                    e(Object(p.b)({ email: r, password: b })),
                    o(''),
                    j('')
                },
                children: [
                  Object(m.jsx)(v, {
                    required: !0,
                    id: 'standard-email-input',
                    label: 'Email ',
                    type: 'email',
                    value: r,
                    autoComplete: 'current-login',
                    onChange: function (e) {
                      var t = e.target
                      return o(t.value)
                    },
                  }),
                  Object(m.jsx)(v, {
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
                  Object(m.jsxs)('div', {
                    className: t.button,
                    children: [
                      Object(m.jsx)(x.a, {
                        type: 'submit',
                        id: f.a.loginBtn,
                        children: '\u0412\u0445\u043e\u0434',
                      }),
                      Object(m.jsx)(l.b, {
                        to: g.a.reg,
                        style: { textDecoration: 'none' },
                        children: Object(m.jsxs)(x.a, {
                          id: f.a.regBtn,
                          type: 'button',
                          children: [
                            '\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f',
                            ' ',
                          ],
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
        return Object(m.jsxs)('div', {
          children: [
            Object(m.jsx)(r.a, {}),
            Object(m.jsx)(n.a, { children: Object(m.jsx)(C.a, {}) }),
            Object(m.jsx)(n.a, { children: Object(m.jsx)(h, {}) }),
          ],
        })
      }
    },
  },
])
//# sourceMappingURL=8.1a738042.chunk.js.map
