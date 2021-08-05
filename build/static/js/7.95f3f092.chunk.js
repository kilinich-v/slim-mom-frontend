;(this['webpackJsonpslim-mom-frontend'] =
  this['webpackJsonpslim-mom-frontend'] || []).push([
  [7],
  {
    137: function (t, e, n) {
      t.exports = {
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
    139: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return c
      }),
        n.d(e, 'b', function () {
          return r
        }),
        n.d(e, 'c', function () {
          return a
        }),
        n.d(e, 'd', function () {
          return o
        }),
        n.d(e, 'e', function () {
          return i
        })
      var c = function (t) {
          return t.products.diaryInfo.products
        },
        r = function (t) {
          return t.products.diaryInfo.date
        },
        a = function (t) {
          return t.products.diaryInfo.productsNotRecommended
        },
        o = function (t) {
          return t.products.diaryInfo
        },
        i = function (t) {
          return t.products.loading
        }
    },
    141: function (t, e, n) {
      'use strict'
      n.d(e, 'd', function () {
        return a
      }),
        n.d(e, 'a', function () {
          return o
        }),
        n.d(e, 'c', function () {
          return i
        }),
        n.d(e, 'b', function () {
          return s
        })
      var c = n(20),
        r = n(32),
        a = function (t) {
          return r.a
            .get('/products/search?product='.concat(t))
            .then(function (t) {
              return t.data
            })
            .catch(function (t) {
              return t
            })
        },
        o = function (t) {
          var e = t.title,
            n = t.weight,
            a = t.kcal
          return function (t) {
            var o = { kcal: a, title: e, weight: n }
            t(c.a.addProductRequest()),
              r.a
                .post('/products', o)
                .then(function (e) {
                  var n = e.data
                  t(c.a.addProductSuccess(n))
                })
                .catch(function (e) {
                  return t(c.a.addProductError(e))
                })
          }
        },
        i = function (t) {
          return function (e) {
            e(c.a.deleteProductIdRequest()),
              r.a
                .delete('/products/'.concat(t))
                .then(function () {
                  return e(c.a.deleteProductIdSuccess(t))
                })
                .catch(function (t) {
                  return e(c.a.deleteProductIdError(t.messages))
                })
          }
        },
        s = function (t) {
          return function (e) {
            e(c.a.dateEatenProductsRequest()),
              r.a
                .get('/products/'.concat(t))
                .then(function (t) {
                  e(c.a.dateEatenProductsSuccess(t.data))
                })
                .catch(function (t) {
                  return e(c.a.dateEatenProductsError(t))
                })
          }
        }
    },
    142: function (t, e, n) {
      'use strict'
      var c = n(246),
        r = n(41),
        a = n(47),
        o = Object(a.a)({
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
        })(c.a)
      e.a = o
    },
    144: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return r
      })
      var c = n(2)
      function r(t) {
        var e = t.children
        return Object(c.jsx)('div', { className: 'container', children: e })
      }
    },
    152: function (t, e, n) {
      'use strict'
      n(0)
      var c = n(21),
        r = n(49),
        a = n(28),
        o = n(137),
        i = n.n(o),
        s = n(2)
      e.a = function () {
        var t = Object(c.c)(a.b),
          e = Object(c.c)(a.a),
          n = Object(c.b)()
        return Object(s.jsx)(s.Fragment, {
          children:
            e &&
            Object(s.jsxs)('div', {
              className: i.a.userInfo,
              children: [
                Object(s.jsxs)('span', {
                  className: i.a.userLogin,
                  children: [' ', t, ' '],
                }),
                Object(s.jsx)('button', {
                  type: 'button',
                  className: i.a.exitButton,
                  onClick: function (t) {
                    n(Object(r.c)())
                  },
                  children: '\u0412\u044b\u0439\u0442\u0438',
                }),
              ],
            }),
        })
      }
    },
    157: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return x
      })
      var c = n(135),
        r = n(0),
        a = n(30),
        o = n(137),
        i = n.n(o),
        s = n(170),
        u = n(171),
        l = n(177),
        d = n(173),
        b = n(172),
        j = n.n(b),
        f = n(2),
        m = (function (t) {
          Object(l.a)(n, t)
          var e = Object(d.a)(n)
          function n() {
            var t
            Object(s.a)(this, n)
            for (var c = arguments.length, r = new Array(c), a = 0; a < c; a++)
              r[a] = arguments[a]
            return (
              ((t = e.call.apply(e, [this].concat(r))).handleEsc = function (
                e,
              ) {
                'Escape' === e.code && t.props.hideModal()
              }),
              (t.onHandleClick = function () {
                t.props.hideModal()
              }),
              (t.handleBackdropClick = function (e) {
                e.target === e.currentTarget && t.props.hideModal()
              }),
              t
            )
          }
          return (
            Object(u.a)(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  window.addEventListener('keydown', this.handleEsc),
                    (document.querySelector('body').style.overflow = 'hidden')
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  window.removeEventListener('keydown', this.handleEsc),
                    (document.querySelector('body').style.overflow = 'auto')
                },
              },
              {
                key: 'render',
                value: function () {
                  return Object(f.jsx)('div', {
                    className: j.a.Overlay,
                    onClick: this.handleBackdropClick,
                    children: Object(f.jsx)('div', {
                      className: j.a.Modal,
                      children: this.props.children,
                    }),
                  })
                },
              },
            ]),
            n
          )
        })(r.Component),
        p = n(21),
        _ = n(28),
        O = n(152),
        h = n(138),
        v = function (t) {
          var e = t.isModalOpen,
            n = t.setModalState,
            c = Object(p.c)(_.a),
            r = Object(h.a)()
          return Object(f.jsxs)(f.Fragment, {
            children: [
              !c &&
                Object(f.jsxs)('div', {
                  className: i.a.nav,
                  children: [
                    Object(f.jsx)(a.b, {
                      to: '/',
                      exact: !0,
                      className: i.a.logo,
                    }),
                    Object(f.jsxs)('div', {
                      children: [
                        Object(f.jsx)(a.b, {
                          to: '/auth',
                          exact: !0,
                          className: i.a.authLink,
                          activeClassName: i.a.linkActive,
                          children: '\u0412\u0425\u041e\u0414',
                        }),
                        Object(f.jsx)(a.b, {
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
              c &&
                Object(f.jsxs)(f.Fragment, {
                  children: [
                    Object(f.jsxs)('div', {
                      className: i.a.nav,
                      children: [
                        Object(f.jsx)(a.b, {
                          to: '/',
                          exact: !0,
                          className: r < 780 ? i.a.BigLogo : i.a.logo,
                        }),
                        r < 768
                          ? Object(f.jsx)('button', {
                              className: e ? i.a.closeButton : i.a.menuButton,
                              onClick: function () {
                                return n()
                              },
                            })
                          : null,
                        r >= 1280
                          ? Object(f.jsxs)(f.Fragment, {
                              children: [
                                Object(f.jsx)(a.b, {
                                  to: '/diary',
                                  exact: !0,
                                  className: i.a.link,
                                  activeClassName: i.a.active,
                                  children:
                                    '\u0414\u041d\u0415\u0412\u041d\u0418\u041a',
                                }),
                                Object(f.jsx)(a.b, {
                                  to: '/calculator',
                                  exact: !0,
                                  className: i.a.link,
                                  activeClassName: i.a.active,
                                  children:
                                    '\u041a\u0410\u041b\u042c\u041a\u0423\u041b\u042f\u0422\u041e\u0420',
                                }),
                              ],
                            })
                          : null,
                        r >= 768 && r < 1280
                          ? Object(f.jsxs)('div', {
                              className: i.a.userInfoNav,
                              children: [
                                Object(f.jsx)(O.a, {}),
                                Object(f.jsx)('button', {
                                  className: e
                                    ? i.a.closeButton
                                    : i.a.menuButton,
                                  onClick: function () {
                                    return n()
                                  },
                                }),
                              ],
                            })
                          : null,
                      ],
                    }),
                    r < 768
                      ? Object(f.jsx)('div', {
                          className: i.a.userInfoNav,
                          children: Object(f.jsx)(O.a, {}),
                        })
                      : null,
                  ],
                }),
            ],
          })
        },
        x = function () {
          var t = Object(h.a)(),
            e = Object(r.useState)(!1),
            n = Object(c.a)(e, 2),
            o = n[0],
            s = n[1],
            u = function () {
              return s(function (t) {
                return { isModalOpen: !t.isModalOpen }
              })
            },
            l = o.isModalOpen
          return Object(f.jsxs)(f.Fragment, {
            children: [
              Object(f.jsx)(v, { isModalOpen: l, setModalState: u }),
              l && t < 1280
                ? Object(f.jsx)(m, {
                    children: Object(f.jsxs)('div', {
                      className: i.a.listBurger,
                      children: [
                        Object(f.jsx)('div', {
                          className: i.a.listBurgerItem,
                          children: Object(f.jsx)(a.b, {
                            className: i.a.linkBurger,
                            activeClassName: i.a.linkActiveWhite,
                            to: '/diary',
                            onClick: u,
                            children:
                              '\u0414\u041d\u0415\u0412\u041d\u0418\u041a',
                          }),
                        }),
                        Object(f.jsx)('div', {
                          className: i.a.listBurgerItem,
                          children: Object(f.jsx)(a.b, {
                            className: i.a.linkBurger,
                            activeClassName: i.a.linkActiveWhite,
                            to: '/calculator',
                            onClick: u,
                            children:
                              '\u041a\u0410\u041b\u042c\u041a\u0423\u041b\u042f\u0422\u041e\u0420',
                          }),
                        }),
                      ],
                    }),
                  })
                : '',
            ],
          })
        }
    },
    166: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return d
      }),
        n.d(e, 'b', function () {
          return b
        })
      var c = n(43),
        r = n.n(c),
        a = n(51),
        o = n(52),
        i = n.n(o),
        s = n(29),
        u = n(141),
        l = new Date().toLocaleDateString('fr-CA'),
        d = function (t) {
          return (function () {
            var e = Object(a.a)(
              r.a.mark(function e(n) {
                var c, a
                return r.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            n(Object(s.b)()),
                            (e.next = 4),
                            i.a.post(
                              'https://slim-mom-backend.herokuapp.com/users/public',
                              t,
                            )
                          )
                        case 4:
                          ;(c = e.sent),
                            (a = c.data),
                            localStorage.setItem(
                              'calcFormParams',
                              JSON.stringify(t),
                            ),
                            n(Object(s.c)(a)),
                            (e.next = 13)
                          break
                        case 10:
                          ;(e.prev = 10),
                            (e.t0 = e.catch(0)),
                            n(Object(s.a)(e.t0.message))
                        case 13:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [[0, 10]],
                )
              }),
            )
            return function (t) {
              return e.apply(this, arguments)
            }
          })()
        },
        b = function (t, e) {
          return (function () {
            var n = Object(a.a)(
              r.a.mark(function n(c) {
                var a, o
                return r.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            (n.next = 3),
                            i.a.post(
                              'https://slim-mom-backend.herokuapp.com/users/private',
                              t,
                              {
                                headers: { Authorization: 'Bearer '.concat(e) },
                              },
                            )
                          )
                        case 3:
                          ;(a = n.sent),
                            (o = a.data),
                            c(Object(s.c)(o)),
                            c(Object(u.b)(l)),
                            (n.next = 12)
                          break
                        case 9:
                          ;(n.prev = 9),
                            (n.t0 = n.catch(0)),
                            c(Object(s.a)(n.t0.message))
                        case 12:
                        case 'end':
                          return n.stop()
                      }
                  },
                  n,
                  null,
                  [[0, 9]],
                )
              }),
            )
            return function (t) {
              return n.apply(this, arguments)
            }
          })()
        }
    },
    168: function (t, e, n) {
      t.exports = { list: 's_list__tvsZJ', ul: 's_ul__1ENI9' }
    },
    169: function (t, e, n) {
      t.exports = {
        section: 'RightSideBar_section__1pBMK',
        container: 'RightSideBar_container__38oUL',
        box: 'RightSideBar_box__37LsA',
        title: 'RightSideBar_title__3oG-v',
        list: 'RightSideBar_list__2vJnC',
        ul: 'RightSideBar_ul__3OVm-',
        text: 'RightSideBar_text__3M2sP',
      }
    },
    170: function (t, e, n) {
      'use strict'
      function c(t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function')
      }
      n.d(e, 'a', function () {
        return c
      })
    },
    171: function (t, e, n) {
      'use strict'
      function c(t, e) {
        for (var n = 0; n < e.length; n++) {
          var c = e[n]
          ;(c.enumerable = c.enumerable || !1),
            (c.configurable = !0),
            'value' in c && (c.writable = !0),
            Object.defineProperty(t, c.key, c)
        }
      }
      function r(t, e, n) {
        return e && c(t.prototype, e), n && c(t, n), t
      }
      n.d(e, 'a', function () {
        return r
      })
    },
    172: function (t, e, n) {
      t.exports = {
        Overlay: 'BurgerMenu_Overlay__qZr6j',
        Modal: 'BurgerMenu_Modal__3yTSX',
      }
    },
    173: function (t, e, n) {
      'use strict'
      function c(t) {
        return (c = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
      }
      function r(t) {
        return (r =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (t) {
                return typeof t
              }
            : function (t) {
                return t &&
                  'function' === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t
              })(t)
      }
      function a(t, e) {
        return !e || ('object' !== r(e) && 'function' !== typeof e)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                )
              return t
            })(t)
          : e
      }
      function o(t) {
        var e = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' === typeof Proxy) return !0
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {}),
              ),
              !0
            )
          } catch (t) {
            return !1
          }
        })()
        return function () {
          var n,
            r = c(t)
          if (e) {
            var o = c(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return a(this, n)
        }
      }
      n.d(e, 'a', function () {
        return o
      })
    },
    174: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return j
      })
      var c = n(135),
        r = n(0),
        a = n(21),
        o = n(168),
        i = n.n(o),
        s = n(2),
        u = function (t) {
          var e = t.info
          return Object(s.jsxs)('ul', {
            className: i.a.ul,
            children: [
              Object(s.jsxs)('li', {
                className: i.a.list,
                children: [
                  Object(s.jsx)('p', {
                    className: i.a.ul,
                    children:
                      '\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c',
                  }),
                  ' ',
                  Object(s.jsxs)('p', {
                    className: i.a.ul,
                    children: [e.kcalRemain, ' \u043a\u043a\u0430\u043b'],
                  }),
                ],
              }),
              Object(s.jsxs)('li', {
                className: i.a.list,
                children: [
                  Object(s.jsx)('p', {
                    className: i.a.ul,
                    children:
                      '\u0423\u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u043e',
                  }),
                  ' ',
                  Object(s.jsxs)('p', {
                    className: i.a.ul,
                    children: [e.totalKcalPerDay, ' \u043a\u043a\u0430\u043b'],
                  }),
                ],
              }),
              Object(s.jsxs)('li', {
                className: i.a.list,
                children: [
                  Object(s.jsx)('p', {
                    className: i.a.ul,
                    children:
                      '\u0414\u043d\u0435\u0432\u043d\u0430\u044f \u043d\u043e\u0440\u043c\u0430',
                  }),
                  ' ',
                  Object(s.jsxs)('p', {
                    className: i.a.ul,
                    children: [e.dayNorm, ' \u043a\u043a\u0430\u043b'],
                  }),
                ],
              }),
              Object(s.jsxs)('li', {
                className: i.a.list,
                children: [
                  Object(s.jsx)('p', {
                    className: i.a.ul,
                    children: 'n% \u043e\u0442 \u043d\u043e\u0440\u043c\u044b',
                  }),
                  ' ',
                  Object(s.jsxs)('p', {
                    className: i.a.ul,
                    children: [e.percentage, ' % \u043a\u043a\u0430\u043b'],
                  }),
                ],
              }),
            ],
          })
        },
        l = n(139),
        d = n(169),
        b = n.n(d)
      var j = function () {
        var t = Object(a.c)(l.d),
          e = Object(a.c)(l.c),
          n = Object(r.useState)([]),
          o = Object(c.a)(n, 2),
          i = o[0],
          d = o[1],
          j = Object(r.useState)(0),
          f = Object(c.a)(j, 2),
          m = f[0],
          p = f[1]
        return (
          Object(r.useEffect)(
            function () {
              t && p(t)
            },
            [t],
          ),
          Object(r.useEffect)(
            function () {
              e && d(e)
            },
            [e],
          ),
          Object(s.jsx)('div', {
            children: Object(s.jsx)('section', {
              className: b.a.section,
              children: Object(s.jsxs)('div', {
                className: b.a.container,
                children: [
                  Object(s.jsxs)('div', {
                    className: b.a.box,
                    children: [
                      Object(s.jsxs)('h3', {
                        className: b.a.title,
                        children: [
                          '\u0421\u0432\u043e\u0434\u043a\u0430 \u0437\u0430 \u0434\u0430\u0442\u0443 ',
                          m.date,
                          ' ',
                        ],
                      }),
                      Object(s.jsx)(u, { info: m }),
                    ],
                  }),
                  Object(s.jsxs)('div', {
                    className: b.a.box,
                    children: [
                      Object(s.jsx)('h3', {
                        className: b.a.title,
                        children:
                          '\u041d\u0435\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c\u044b\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b',
                      }),
                      i.length > 0
                        ? Object(s.jsxs)('p', {
                            className: b.a.list,
                            children: [' ', i.join(', '), ' '],
                          })
                        : Object(s.jsx)('p', {
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
    176: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return o
      })
      var c = n(186),
        r = n(2),
        a = Object(c.a)({
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
      function o(t) {
        var e = t.children,
          n = a()
        return Object(r.jsx)('div', {
          className: n.containerSideBar,
          children: e,
        })
      }
    },
    177: function (t, e, n) {
      'use strict'
      function c(t, e) {
        return (c =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t
          })(t, e)
      }
      function r(t, e) {
        if ('function' !== typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function',
          )
        ;(t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && c(t, e)
      }
      n.d(e, 'a', function () {
        return r
      })
    },
    216: function (t, e, n) {
      t.exports = {
        product_Item: 'DiaryProductListItem_product_Item__2Xq47',
        product_name: 'DiaryProductListItem_product_name__2EclK',
        product_weight:
          'DiaryProductListItem_product_weight__2VlPj DiaryProductListItem_product_name__2EclK',
        product_kCal:
          'DiaryProductListItem_product_kCal__17R0c DiaryProductListItem_product_name__2EclK DiaryProductListItem_product_weight__2VlPj DiaryProductListItem_product_name__2EclK',
        product_button: 'DiaryProductListItem_product_button__1XrKf',
        product_button_dis: 'DiaryProductListItem_product_button_dis__3EzLZ',
      }
    },
    217: function (t, e, n) {
      t.exports = {
        container: 'DiaryProductsList_container__38lXj',
        list: 'DiaryProductsList_list__2YUND',
        mobilButton: 'DiaryProductsList_mobilButton__1JNKR',
      }
    },
    218: function (t, e, n) {
      ;(function (e) {
        var n = /^\s+|\s+$/g,
          c = /^[-+]0x[0-9a-f]+$/i,
          r = /^0b[01]+$/i,
          a = /^0o[0-7]+$/i,
          o = parseInt,
          i = 'object' == typeof e && e && e.Object === Object && e,
          s = 'object' == typeof self && self && self.Object === Object && self,
          u = i || s || Function('return this')(),
          l = Object.prototype.toString,
          d = Math.max,
          b = Math.min,
          j = function () {
            return u.Date.now()
          }
        function f(t) {
          var e = typeof t
          return !!t && ('object' == e || 'function' == e)
        }
        function m(t) {
          if ('number' == typeof t) return t
          if (
            (function (t) {
              return (
                'symbol' == typeof t ||
                ((function (t) {
                  return !!t && 'object' == typeof t
                })(t) &&
                  '[object Symbol]' == l.call(t))
              )
            })(t)
          )
            return NaN
          if (f(t)) {
            var e = 'function' == typeof t.valueOf ? t.valueOf() : t
            t = f(e) ? e + '' : e
          }
          if ('string' != typeof t) return 0 === t ? t : +t
          t = t.replace(n, '')
          var i = r.test(t)
          return i || a.test(t)
            ? o(t.slice(2), i ? 2 : 8)
            : c.test(t)
            ? NaN
            : +t
        }
        t.exports = function (t, e, n) {
          var c,
            r,
            a,
            o,
            i,
            s,
            u = 0,
            l = !1,
            p = !1,
            _ = !0
          if ('function' != typeof t) throw new TypeError('Expected a function')
          function O(e) {
            var n = c,
              a = r
            return (c = r = void 0), (u = e), (o = t.apply(a, n))
          }
          function h(t) {
            return (u = t), (i = setTimeout(x, e)), l ? O(t) : o
          }
          function v(t) {
            var n = t - s
            return void 0 === s || n >= e || n < 0 || (p && t - u >= a)
          }
          function x() {
            var t = j()
            if (v(t)) return g(t)
            i = setTimeout(
              x,
              (function (t) {
                var n = e - (t - s)
                return p ? b(n, a - (t - u)) : n
              })(t),
            )
          }
          function g(t) {
            return (i = void 0), _ && c ? O(t) : ((c = r = void 0), o)
          }
          function y() {
            var t = j(),
              n = v(t)
            if (((c = arguments), (r = this), (s = t), n)) {
              if (void 0 === i) return h(s)
              if (p) return (i = setTimeout(x, e)), O(s)
            }
            return void 0 === i && (i = setTimeout(x, e)), o
          }
          return (
            (e = m(e) || 0),
            f(n) &&
              ((l = !!n.leading),
              (a = (p = 'maxWait' in n) ? d(m(n.maxWait) || 0, e) : a),
              (_ = 'trailing' in n ? !!n.trailing : _)),
            (y.cancel = function () {
              void 0 !== i && clearTimeout(i), (u = 0), (c = s = r = i = void 0)
            }),
            (y.flush = function () {
              return void 0 === i ? o : g(j())
            }),
            y
          )
        }
      }.call(this, n(79)))
    },
    219: function (t, e, n) {
      t.exports = {
        form: 'DiaryAddProductForm_form__25OjW',
        form_Mobile: 'DiaryAddProductForm_form_Mobile__I1D_b',
        input: 'DiaryAddProductForm_input__1mPTR',
        btn: 'DiaryAddProductForm_btn__1S0Jl',
        btn_Add: 'DiaryAddProductForm_btn_Add__FtTq_',
      }
    },
    220: function (t, e, n) {
      t.exports = {
        btn: 'ModalDiaryAddProductForm_btn__obLAG',
        btn_dis:
          'ModalDiaryAddProductForm_btn_dis__3W3wZ ModalDiaryAddProductForm_btn__obLAG',
      }
    },
    221: function (t, e, n) {
      t.exports = {
        open: 'Modal_open__kvznN',
        close: 'Modal_close__3roS-',
        overlay: 'Modal_overlay__k7xwl',
        modal: 'Modal_modal__1ZoAj',
        closeButton: 'Modal_closeButton__1moL_',
        arrowCloseButton: 'Modal_arrowCloseButton__2qnVk',
      }
    },
    222: function (t, e, n) {
      t.exports = {
        container: 'DiaryPage_container__3Kb59',
        containerError: 'DiaryPage_containerError__LaxhP',
        container_page: 'DiaryPage_container_page__108dH',
        container_list: 'DiaryPage_container_list__3m-p9',
      }
    },
    223: function (t, e, n) {
      t.exports = {
        wrapper: 'styless_wrapper__2l2sL',
        section: 'styless_section__1raW8',
        box: 'styless_box__3LSnZ',
        header: 'styless_header__3z0mD',
        headerBox: 'styless_headerBox__2j1TX',
      }
    },
    249: function (t, e, n) {
      'use strict'
      n.r(e)
      var c = n(176),
        r = n(144),
        a = n(174),
        o = n(166),
        i = n(0),
        s = n(138),
        u = n(21),
        l = n(17),
        d = n(70),
        b = n(135),
        j = n(139),
        f = n(141),
        m = n(216),
        p = n.n(m),
        _ = n(2)
      function O(t) {
        var e = t.title,
          n = t.weight,
          c = t.kcal,
          r = t.id,
          a = Object(u.b)(),
          o = c,
          i = Object(u.c)(j.b),
          s = new Date().toLocaleDateString('fr-CA')
        return Object(_.jsxs)('li', {
          className: p.a.product_Item,
          children: [
            Object(_.jsx)('span', { className: p.a.product_name, children: e }),
            Object(_.jsxs)('span', {
              className: p.a.product_weight,
              children: [n, ' \u0433'],
            }),
            Object(_.jsxs)('span', {
              className: p.a.product_kCal,
              children: [o, ' \u043a\u043a\u0430\u043b'],
            }),
            Object(_.jsx)('button', {
              className: s === i ? p.a.product_button : p.a.product_button_dis,
              type: 'button',
              onClick: function () {
                return a(Object(f.c)(r)), void a(Object(f.b)(s))
              },
            }),
          ],
        })
      }
      var h = n(217),
        v = n.n(h),
        x = ['id']
      function g() {
        var t = Object(u.c)(j.a),
          e = Object(i.useState)([]),
          n = Object(b.a)(e, 2),
          c = n[0],
          r = n[1]
        return (
          Object(i.useEffect)(
            function () {
              t && r(t)
            },
            [t],
          ),
          Object(_.jsx)(_.Fragment, {
            children: Object(_.jsx)('div', {
              className: v.a.container,
              children:
                (null === c || void 0 === c ? void 0 : c.length) > 0
                  ? Object(_.jsx)('ul', {
                      className: v.a.list,
                      children: c.map(function (t) {
                        var e = t.id,
                          n = Object(d.a)(t, x)
                        return Object(_.jsx)(O, Object(l.a)({ id: e }, n), e)
                      }),
                    })
                  : null,
            }),
          })
        )
      }
      var y = n(4),
        N = n(117),
        k = n(248),
        w = n(53),
        S = Object(N.a)(function (t) {
          var e
          return {
            textField:
              ((e = {
                marginLeft: t.spacing(1),
                marginRight: t.spacing(1),
                marginBottom: t.spacing(4),
                width: '188px',
              }),
              Object(y.a)(e, t.breakpoints.up('768'), { width: '259px' }),
              Object(y.a)(
                e,
                '& input',
                Object(y.a)(
                  {
                    fontSize: '18px',
                    fontWeight: '700',
                    fontFamily: 'Verdana',
                  },
                  t.breakpoints.up('768'),
                  { fontSize: '26px' },
                ),
              ),
              e),
            underline: {
              '&&&:before': { borderBottom: 'none' },
              '&&:after': { borderBottom: 'none' },
            },
          }
        })
      function B() {
        var t = Object(i.useState)(new Date().toLocaleDateString('fr-CA')),
          e = Object(b.a)(t, 2),
          n = e[0],
          c = e[1],
          r = Object(u.c)(j.e),
          a = Object(u.b)()
        Object(i.useEffect)(
          function () {
            a(Object(f.b)(n))
          },
          [n, a],
        )
        var o = S()
        return Object(_.jsx)(_.Fragment, {
          children: r
            ? Object(_.jsx)(w.a, {})
            : Object(_.jsx)('form', {
                className: o.container,
                noValidate: !0,
                children: Object(_.jsx)(k.a, {
                  InputProps: { classes: o },
                  id: 'date',
                  type: 'date',
                  defaultValue: n,
                  onChange: function (t) {
                    return (function (t) {
                      var e = t.target.value
                      c(e)
                    })(t)
                  },
                  className: o.textField,
                  InputLabelProps: { shrink: !0 },
                }),
              }),
        })
      }
      var P = n(54),
        D = n(218),
        C = n.n(D),
        L = n(219),
        I = n.n(L),
        M = n(142)
      n(78)
      function E() {
        var t = Object(i.useState)(''),
          e = Object(b.a)(t, 2),
          n = e[0],
          c = e[1],
          r = Object(i.useState)(''),
          a = Object(b.a)(r, 2),
          o = a[0],
          l = a[1],
          d = Object(i.useState)(''),
          m = Object(b.a)(d, 2),
          p = m[0],
          O = m[1],
          h = Object(i.useState)([]),
          v = Object(b.a)(h, 2),
          x = v[0],
          g = v[1],
          y = Object(u.b)(),
          N = Object(u.c)(j.b)
        Object(i.useEffect)(
          C()(function () {
            n.length >= 3 &&
              Object(f.d)(n).then(function (t) {
                g(t)
              })
          }, 500),
          [n],
        )
        var k = Object(i.useCallback)(function (t) {
            var e = t.target.value
            if (e > 5e3) {
              return (
                l(''),
                P.b.warn(
                  '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0432\u0435\u0441',
                )
              )
            }
            l(Number(e))
          }),
          w = function () {
            c(''), l('')
          },
          S = Object(s.a)()
        return Object(_.jsx)(_.Fragment, {
          children: Object(_.jsxs)('form', {
            className: S >= 768 ? I.a.form : I.a.form_Mobile,
            onSubmit: function (t) {
              if ((t.preventDefault(), 0 === x.length)) {
                return (
                  c(''),
                  P.b.warn(
                    '\u041f\u0440\u043e\u0434\u0443\u043a\u0442 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d \u0438\u043b\u0438 \u0432\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430',
                  )
                )
              }
              if (
                !(null === x || void 0 === x
                  ? void 0
                  : x.find(function (t) {
                      return t.title === n
                    }))
              ) {
                return (
                  c(''),
                  P.b.warn(
                    '\u0412\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430',
                  )
                )
              }
              y(Object(f.b)(N)),
                y(
                  Object(f.a)({ kcal: Number(p), weight: Number(o), title: n }),
                ),
                y(Object(f.b)(N)),
                w()
            },
            children: [
              Object(_.jsx)('input', {
                className: I.a.input,
                list: 'cookies',
                name: 'product',
                value: n,
                placeholder:
                  '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430',
                type: 'text',
                autoComplete: 'off',
                onChange: function (t) {
                  var e = t.target.value
                  if ((c(e), !x)) return null
                  var n =
                      null === x || void 0 === x
                        ? void 0
                        : x.find(function (t) {
                            return t.title === e
                          }),
                    r = null === n || void 0 === n ? void 0 : n.kcal
                  O(r)
                },
                required: !0,
              }),
              (null === x || void 0 === x ? void 0 : x.length) > 0 &&
                Object(_.jsx)('datalist', {
                  id: 'cookies',
                  children: x.map(function (t) {
                    var e = t.id,
                      n = t.title
                    return Object(_.jsx)('option', { value: n, children: n }, e)
                  }),
                }),
              Object(_.jsx)('input', {
                className: I.a.input,
                name: 'weight',
                value: o,
                placeholder: '\u0413\u0440\u0430\u043c\u043c\u044b',
                type: 'number',
                min: '0',
                onChange: k,
                required: !0,
              }),
              S >= 768
                ? Object(_.jsx)('button', {
                    type: 'submit',
                    className: I.a.btn,
                  })
                : '',
              S < 768
                ? Object(_.jsx)(M.a, {
                    type: 'submit',
                    className: I.a.btn_Add,
                    children:
                      '\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c',
                  })
                : '',
            ],
          }),
        })
      }
      var F = n(220),
        A = n.n(F),
        R = n(221),
        H = n.n(R),
        T = function (t) {
          var e = t.children,
            n = t.openModal,
            c = t.toggleModal,
            r = Object(s.a)()
          Object(i.useEffect)(function () {
            var t = function (t) {
              'Escape' === t.code && c()
            }
            return (
              window.addEventListener('keydown', t),
              function () {
                window.removeEventListener('keydown', t)
              }
            )
          }, []),
            Object(i.useEffect)(
              function () {
                document.body.className = n ? H.a.open : H.a.close
              },
              [n],
            )
          return Object(_.jsx)(_.Fragment, {
            children:
              n &&
              Object(_.jsx)('div', {
                className: H.a.overlay,
                onClick: function (t) {
                  'overlay' === t.target.dataset.name && c()
                },
                'data-name': 'overlay',
                children: Object(_.jsxs)('div', {
                  className: H.a.modal,
                  'data-name': 'modal',
                  children: [
                    Object(_.jsx)('button', {
                      className:
                        r < 768 ? H.a.arrowCloseButton : H.a.closeButton,
                      type: 'button',
                      onClick: c,
                    }),
                    e,
                  ],
                }),
              }),
          })
        },
        q = function () {
          var t = Object(i.useState)(!1),
            e = Object(b.a)(t, 2),
            n = e[0],
            c = e[1],
            r = function () {
              c(!n)
            },
            a = Object(u.c)(j.b),
            o = new Date().toLocaleDateString('fr-CA')
          return Object(_.jsxs)(_.Fragment, {
            children: [
              o === a
                ? Object(_.jsx)('button', {
                    type: 'button',
                    className: A.a.btn,
                    onClick: r,
                  })
                : null,
              Object(_.jsx)(T, {
                arrowVisible: !0,
                toggleModal: r,
                openModal: n,
                children: Object(_.jsx)(E, { toggleModal: r }),
              }),
            ],
          })
        },
        V = n(222),
        K = n.n(V)
      function W() {
        var t = Object(u.b)(),
          e = localStorage.getItem('token'),
          n = localStorage.getItem('calcFormParams')
        Object(i.useEffect)(function () {
          n && t(Object(o.b)(JSON.parse(n), e))
        }, [])
        var c = Object(s.a)(),
          r = Object(u.c)(j.b),
          a = new Date().toLocaleDateString('fr-CA')
        return Object(_.jsx)(_.Fragment, {
          children:
            c >= 768
              ? Object(_.jsxs)('div', {
                  className: K.a.container_page,
                  children: [
                    Object(_.jsx)(B, {}),
                    a === r ? Object(_.jsx)(E, {}) : null,
                    Object(_.jsx)('div', {
                      className: K.a.container_list,
                      children: Object(_.jsx)(g, {}),
                    }),
                  ],
                })
              : Object(_.jsxs)('div', {
                  className: K.a.containerError,
                  children: [
                    Object(_.jsx)(B, {}),
                    Object(_.jsx)('div', { children: Object(_.jsx)(g, {}) }),
                    c <= 768 ? Object(_.jsx)(q, {}) : Object(_.jsx)(E, {}),
                  ],
                }),
        })
      }
      var J = n(157),
        z = n(152),
        X = n(223),
        Z = n.n(X),
        $ = function () {
          var t = Object(s.a)()
          return Object(_.jsx)(_.Fragment, {
            children:
              t >= 1280
                ? Object(_.jsx)('div', {
                    className: Z.a.wrapper,
                    children: Object(_.jsxs)('div', {
                      className: Z.a.section,
                      children: [
                        Object(_.jsxs)('div', {
                          className: Z.a.header,
                          children: [
                            Object(_.jsx)(J.a, {}),
                            Object(_.jsx)('div', {
                              className: Z.a.headerBox,
                              children: t >= 1280 ? Object(_.jsx)(z.a, {}) : '',
                            }),
                          ],
                        }),
                        Object(_.jsxs)('div', {
                          className: Z.a.box,
                          children: [
                            Object(_.jsx)('div', {
                              className: Z.a.case,
                              children: Object(_.jsx)(W, {}),
                            }),
                            Object(_.jsx)(a.a, {}),
                          ],
                        }),
                      ],
                    }),
                  })
                : Object(_.jsxs)('div', {
                    className: Z.a.box,
                    children: [
                      Object(_.jsxs)(r.a, {
                        children: [
                          Object(_.jsx)(J.a, {}),
                          Object(_.jsx)(W, {}),
                        ],
                      }),
                      Object(_.jsxs)(c.a, {
                        children: [
                          t >= 1280 ? Object(_.jsx)(z.a, {}) : '',
                          Object(_.jsx)(a.a, {}),
                        ],
                      }),
                    ],
                  }),
          })
        }
      e.default = function () {
        return Object(_.jsx)($, {})
      }
    },
  },
])
//# sourceMappingURL=7.95f3f092.chunk.js.map
