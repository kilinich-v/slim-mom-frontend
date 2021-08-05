;(this['webpackJsonpslim-mom-frontend'] =
  this['webpackJsonpslim-mom-frontend'] || []).push([
  [10],
  {
    168: function (e, s, t) {
      e.exports = { list: 's_list__tvsZJ', ul: 's_ul__1ENI9' }
    },
    169: function (e, s, t) {
      e.exports = {
        section: 'RightSideBar_section__1pBMK',
        container: 'RightSideBar_container__38oUL',
        box: 'RightSideBar_box__37LsA',
        title: 'RightSideBar_title__3oG-v',
        list: 'RightSideBar_list__2vJnC',
        ul: 'RightSideBar_ul__3OVm-',
        text: 'RightSideBar_text__3M2sP',
      }
    },
    174: function (e, s, t) {
      'use strict'
      t.d(s, 'a', function () {
        return h
      })
      var a = t(135),
        c = t(0),
        i = t(21),
        n = t(168),
        r = t.n(n),
        l = t(2),
        j = function (e) {
          var s = e.info
          return Object(l.jsxs)('ul', {
            className: r.a.ul,
            children: [
              Object(l.jsxs)('li', {
                className: r.a.list,
                children: [
                  Object(l.jsx)('p', {
                    className: r.a.ul,
                    children:
                      '\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c',
                  }),
                  ' ',
                  Object(l.jsxs)('p', {
                    className: r.a.ul,
                    children: [s.kcalRemain, ' \u043a\u043a\u0430\u043b'],
                  }),
                ],
              }),
              Object(l.jsxs)('li', {
                className: r.a.list,
                children: [
                  Object(l.jsx)('p', {
                    className: r.a.ul,
                    children:
                      '\u0423\u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u043e',
                  }),
                  ' ',
                  Object(l.jsxs)('p', {
                    className: r.a.ul,
                    children: [s.totalKcalPerDay, ' \u043a\u043a\u0430\u043b'],
                  }),
                ],
              }),
              Object(l.jsxs)('li', {
                className: r.a.list,
                children: [
                  Object(l.jsx)('p', {
                    className: r.a.ul,
                    children:
                      '\u0414\u043d\u0435\u0432\u043d\u0430\u044f \u043d\u043e\u0440\u043c\u0430',
                  }),
                  ' ',
                  Object(l.jsxs)('p', {
                    className: r.a.ul,
                    children: [s.dayNorm, ' \u043a\u043a\u0430\u043b'],
                  }),
                ],
              }),
              Object(l.jsxs)('li', {
                className: r.a.list,
                children: [
                  Object(l.jsx)('p', {
                    className: r.a.ul,
                    children: 'n% \u043e\u0442 \u043d\u043e\u0440\u043c\u044b',
                  }),
                  ' ',
                  Object(l.jsxs)('p', {
                    className: r.a.ul,
                    children: [s.percentage, ' % \u043a\u043a\u0430\u043b'],
                  }),
                ],
              }),
            ],
          })
        },
        d = t(139),
        o = t(169),
        b = t.n(o)
      var h = function () {
        var e = Object(i.c)(d.d),
          s = Object(i.c)(d.c),
          t = Object(c.useState)([]),
          n = Object(a.a)(t, 2),
          r = n[0],
          o = n[1],
          h = Object(c.useState)(0),
          x = Object(a.a)(h, 2),
          O = x[0],
          u = x[1]
        return (
          Object(c.useEffect)(
            function () {
              e && u(e)
            },
            [e],
          ),
          Object(c.useEffect)(
            function () {
              s && o(s)
            },
            [s],
          ),
          Object(l.jsx)('div', {
            children: Object(l.jsx)('section', {
              className: b.a.section,
              children: Object(l.jsxs)('div', {
                className: b.a.container,
                children: [
                  Object(l.jsxs)('div', {
                    className: b.a.box,
                    children: [
                      Object(l.jsxs)('h3', {
                        className: b.a.title,
                        children: [
                          '\u0421\u0432\u043e\u0434\u043a\u0430 \u0437\u0430 \u0434\u0430\u0442\u0443 ',
                          O.date,
                          ' ',
                        ],
                      }),
                      Object(l.jsx)(j, { info: O }),
                    ],
                  }),
                  Object(l.jsxs)('div', {
                    className: b.a.box,
                    children: [
                      Object(l.jsx)('h3', {
                        className: b.a.title,
                        children:
                          '\u041d\u0435\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c\u044b\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b',
                      }),
                      r.length > 0
                        ? Object(l.jsxs)('p', {
                            className: b.a.list,
                            children: [' ', r.join(', '), ' '],
                          })
                        : Object(l.jsx)('p', {
                            className: b.a.list,
                            children:
                              ' \u0417\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0412\u0430\u0448 \u0440\u0430\u0446\u0438\u043e\u043d ',
                          }),
                    ],
                  }),
                ],
              }),
            }),
          })
        )
      }
    },
    176: function (e, s, t) {
      'use strict'
      t.d(s, 'a', function () {
        return n
      })
      var a = t(186),
        c = t(2),
        i = Object(a.a)({
          containerSideBar: {
            position: 'relative',
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: 15,
            paddingRight: 15,
            backgroundColor: '#F0F1F3',
            '@media screen and (max-width: 1279px) and (min-width: 768px)': {
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'bottom right',
            },
            '@media (min-width: 1280px)': {
              backgroundPosition: 'right',
              backgroundRepeat: 'no-repeat',
              height: 850,
              width: 624,
            },
          },
        })
      function n(e) {
        var s = e.children,
          t = i()
        return Object(c.jsx)('div', {
          className: t.containerSideBar,
          children: s,
        })
      }
    },
    215: function (e, s, t) {
      e.exports = {
        wrapper: 'styless_wrapper__2IVwI',
        section: 'styless_section__36hxc',
        box: 'styless_box__2Az09',
        header: 'styless_header__2D9_0',
        headerBox: 'styless_headerBox__9fi3E',
      }
    },
    253: function (e, s, t) {
      'use strict'
      t.r(s)
      var a = t(144),
        c = t(187),
        i = t(176),
        n = t(174),
        r = t(157),
        l = t(152),
        j = t(138),
        d = t(215),
        o = t.n(d),
        b = t(2),
        h = function () {
          var e = Object(j.a)()
          return Object(b.jsx)(b.Fragment, {
            children:
              e >= 1280
                ? Object(b.jsx)('div', {
                    className: o.a.wrapper,
                    children: Object(b.jsxs)('div', {
                      className: o.a.section,
                      children: [
                        Object(b.jsxs)('div', {
                          className: o.a.header,
                          children: [
                            Object(b.jsx)(r.a, {}),
                            Object(b.jsx)('div', {
                              className: o.a.headerBox,
                              children: e >= 1280 ? Object(b.jsx)(l.a, {}) : '',
                            }),
                          ],
                        }),
                        Object(b.jsxs)('div', {
                          className: o.a.box,
                          children: [
                            Object(b.jsx)(c.a, {}),
                            Object(b.jsx)(n.a, {}),
                          ],
                        }),
                      ],
                    }),
                  })
                : Object(b.jsxs)('div', {
                    className: o.a.box,
                    children: [
                      Object(b.jsxs)(a.a, {
                        children: [
                          Object(b.jsx)(r.a, {}),
                          Object(b.jsx)(c.a, {}),
                        ],
                      }),
                      Object(b.jsxs)(i.a, {
                        children: [
                          e >= 1280 ? Object(b.jsx)(l.a, {}) : '',
                          Object(b.jsx)(n.a, {}),
                        ],
                      }),
                    ],
                  }),
          })
        }
      s.default = function () {
        return Object(b.jsx)(h, {})
      }
    },
  },
])
//# sourceMappingURL=10.61096b41.chunk.js.map
