;(this['webpackJsonpslim-mom-frontend'] =
  this['webpackJsonpslim-mom-frontend'] || []).push([
  [10],
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
    254: function (e, t, a) {
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
        b = a(246),
        d = a(41),
        j = a(47),
        p = a(244),
        m = a(34),
        x = a(49),
        f = a(18),
        g = a(2),
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
              { width: '382px', alignItems: 'start' },
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
                color: d.a[600],
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
        O = Object(j.a)(function (e) {
          var t
          return {
            root:
              ((t = {
                borderRadius: '30px',
                width: '176px',
                height: '44px',
                color: 'white',
                marginBottom: '20px',
                backgroundColor: d.a[500],
                '&:hover': { backgroundColor: d.a[700] },
              }),
              Object(i.a)(t, e.breakpoints.down('768'), { bottom: '0' }),
              Object(i.a)(t, e.breakpoints.down('1200'), { left: '0' }),
              t),
          }
        })(p.a),
        v = Object(j.a)(function (e) {
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
                '&:hover': { backgroundColor: d.a[700], color: 'white' },
              }),
              Object(i.a)(t, e.breakpoints.down('768'), { bottom: '0' }),
              Object(i.a)(t, e.breakpoints.down('1200'), { left: '0' }),
              t),
          }
        })(p.a),
        h = Object(j.a)(function (e) {
          return {
            root: {
              marginBottom: '20px',
              '& label': { fontSize: '14px' },
              '& .MuiInput-underline': Object(i.a)(
                { width: '290px' },
                e.breakpoints.up('768'),
                { width: '239px' },
              ),
              '& label.Mui-focused': { color: d.a[500] },
              '& .MuiInput-underline:after': { borderBottomColor: d.a[500] },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: d.a[500] },
                '&:hover fieldset': { borderColor: d.a[500] },
                '&.Mui-focused fieldset': { borderColor: d.a[500] },
              },
            },
          }
        })(b.a)
      function C() {
        var e = Object(s.b)(),
          t = Object(s.c)(m.b),
          a = _(),
          n = Object(c.useState)(''),
          r = Object(o.a)(n, 2),
          i = r[0],
          u = r[1],
          b = Object(c.useState)(''),
          d = Object(o.a)(b, 2),
          j = d[0],
          p = d[1],
          C = Object(c.useState)(''),
          k = Object(o.a)(C, 2),
          w = k[0],
          y = k[1],
          B = Object(c.useState)(!1),
          N = Object(o.a)(B, 2),
          H = N[0],
          I = N[1]
        Object(c.useEffect)(function () {
          I(!0)
        }, [])
        return (
          Object(c.useEffect)(
            function () {
              t.length &&
                (e(Object(x.b)({ email: i, password: w })), p(''), u(''), y(''))
            },
            [e, i, w, t],
          ),
          Object(g.jsx)('div', {
            style: {
              transform: H ? 'translateX(0)' : 'translateX(-101%)',
              opacity: H ? '1' : '0',
            },
            children: Object(g.jsxs)('div', {
              children: [
                Object(g.jsx)('h3', {
                  className: a.title,
                  children:
                    '\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f',
                }),
                Object(g.jsxs)('form', {
                  className: a.root,
                  noValidate: !0,
                  autoComplete: 'off',
                  onSubmit: function (t) {
                    t.preventDefault(),
                      e(Object(x.d)({ name: j, email: i, password: w })),
                      console.log(
                        'log from handleSubmit, name, email, password:',
                        j,
                        i,
                        w,
                      )
                  },
                  children: [
                    Object(g.jsx)(h, {
                      required: !0,
                      id: 'standard-name-input',
                      label: '\u0418\u043c\u044f',
                      value: j,
                      type: 'Name',
                      autoComplete: 'current-name',
                      onChange: function (e) {
                        var t = e.target
                        return p(t.value)
                      },
                    }),
                    Object(g.jsx)(h, {
                      required: !0,
                      id: 'standard-email-input',
                      label: '\u041b\u043e\u0433\u0438\u043d',
                      value: i,
                      type: 'email',
                      autoComplete: 'current-login',
                      onChange: function (e) {
                        var t = e.target
                        return u(t.value)
                      },
                    }),
                    Object(g.jsx)(h, {
                      required: !0,
                      id: 'standard-password-input',
                      label: '\u041f\u0430\u0440\u043e\u043b\u044c',
                      value: w,
                      type: 'password',
                      autoComplete: 'current-password',
                      onChange: function (e) {
                        var t = e.target
                        return y(t.value)
                      },
                    }),
                    Object(g.jsxs)('div', {
                      className: a.button,
                      children: [
                        Object(g.jsx)(l.b, {
                          to: f.a.auth,
                          children: Object(g.jsx)(O, {
                            type: 'submit',
                            children: '\u0412\u0445\u043e\u0434',
                          }),
                        }),
                        Object(g.jsx)(v, {
                          type: 'submit',
                          children:
                            '\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        )
      }
      var k = a(165)
      t.default = function () {
        return Object(g.jsxs)(g.Fragment, {
          children: [
            Object(g.jsx)(r.a, {}),
            Object(g.jsx)(n.a, { children: Object(g.jsx)(k.a, {}) }),
            Object(g.jsx)(n.a, { children: Object(g.jsx)(C, {}) }),
          ],
        })
      }
    },
  },
])
//# sourceMappingURL=10.1e709a37.chunk.js.map
