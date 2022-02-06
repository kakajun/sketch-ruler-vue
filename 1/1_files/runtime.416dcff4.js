!(function () {
  'use strict'
  var e,
    t,
    r,
    a,
    o,
    n,
    d,
    i = {},
    c = {}
  function l(e) {
    var t = c[e]
    if (void 0 !== t) return t.exports
    var r = (c[e] = { id: e, loaded: !1, exports: {} })
    return i[e].call(r.exports, r, r.exports, l), (r.loaded = !0), r.exports
  }
  ;(l.m = i),
    (l.amdO = {}),
    (e = []),
    (l.O = function (t, r, a, o) {
      if (!r) {
        var n = 1 / 0
        for (f = 0; f < e.length; f++) {
          ;(r = e[f][0]), (a = e[f][1]), (o = e[f][2])
          for (var d = !0, i = 0; i < r.length; i++)
            (!1 & o || n >= o) &&
            Object.keys(l.O).every(function (e) {
              return l.O[e](r[i])
            })
              ? r.splice(i--, 1)
              : ((d = !1), o < n && (n = o))
          if (d) {
            e.splice(f--, 1)
            var c = a()
            void 0 !== c && (t = c)
          }
        }
        return t
      }
      o = o || 0
      for (var f = e.length; f > 0 && e[f - 1][2] > o; f--) e[f] = e[f - 1]
      e[f] = [r, a, o]
    }),
    (l.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default
            }
          : function () {
              return e
            }
      return l.d(t, { a: t }), t
    }),
    (r = Object.getPrototypeOf
      ? function (e) {
          return Object.getPrototypeOf(e)
        }
      : function (e) {
          return e.__proto__
        }),
    (l.t = function (e, a) {
      if ((1 & a && (e = this(e)), 8 & a)) return e
      if ('object' == typeof e && e) {
        if (4 & a && e.__esModule) return e
        if (16 & a && 'function' == typeof e.then) return e
      }
      var o = Object.create(null)
      l.r(o)
      var n = {}
      t = t || [null, r({}), r([]), r(r)]
      for (var d = 2 & a && e; 'object' == typeof d && !~t.indexOf(d); d = r(d))
        Object.getOwnPropertyNames(d).forEach(function (t) {
          n[t] = function () {
            return e[t]
          }
        })
      return (
        (n.default = function () {
          return e
        }),
        l.d(o, n),
        o
      )
    }),
    (l.d = function (e, t) {
      for (var r in t)
        l.o(t, r) &&
          !l.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
    }),
    (l.f = {}),
    (l.e = function (e) {
      return Promise.all(
        Object.keys(l.f).reduce(function (t, r) {
          return l.f[r](e, t), t
        }, [])
      )
    }),
    (l.u = function (e) {
      return (
        'js/' +
        ({
          43: 'collage-element',
          133: 'scrambleDialog',
          222: 'watermark-element',
          238: 'punctuate-panel',
          264: 'editor-change-templet',
          304: 'ellipse-element',
          552: 'editor-import-dialog',
          565: 'sdk-page',
          674: 'chart-panel',
          1050: 'animation',
          1192: 'psd-to-templet',
          1288: 'editor-crop-dialog',
          1343: 'editor-component-resource',
          1374: 'editor-slide-layout',
          1578: 'jszip',
          2087: 'rect-element',
          2089: 'editor-video-preview-dialog',
          2423: 'chart-render',
          2479: 'nine-patch-panel',
          2606: 'editor-share-popover',
          2712: 'color-alchemy',
          2905: 'editor-qrcode-dialog',
          3153: 'editor-sdk',
          3383: 'editor-widget-resource',
          3556: 'editor-preview-dialog',
          3613: 'IllusionNornalServicer',
          3638: 'group-panel',
          3782: 'line-element',
          3799: 'cell-element',
          3873: 'svg-panel',
          3896: 'editor-templet-resource',
          3932: 'icon-sprite',
          4262: 'audio-panel',
          4297: 'xlsx',
          4373: 'widget-panel',
          4549: 'brush-element',
          4570: 'IllusionWorkerServicer',
          4589: 'gd-materials',
          4645: 'enterprise-templet-resource',
          4672: 'table-panel',
          4741: 'image-filter-panel',
          4763: 'editor-utils-export',
          4772: 'editor-download-popover',
          4926: 'enterprise-element-resource',
          5195: 'map3d-color-picker',
          5275: 'editor-element-resource',
          5277: 'editor-exporter',
          5309: 'arrow-element',
          5354: 'editor-commerial-dialog',
          5564: 'editor-upload-wechat',
          5663: 'text-panel',
          5755: 'jsqr',
          5783: 'three-element',
          5791: 'video-element',
          5892: 'editor-embed-create',
          5964: 'editor-ui-v2-icon-sprite',
          6044: 'three-text-panel',
          6266: 'audio-element',
          6315: 'editor-chart-resource',
          6508: 'environment-light-map-panel',
          6821: 'editor-photo-resource',
          6994: 'three-font-parser',
          7080: 'watermark-style-panel',
          7207: 'editor-layout-dialog',
          7209: 'components_table',
          7306: 'table-element',
          7397: 'flex-element',
          7431: 'editor-template-print',
          7470: 'editor-buy-vip-popover',
          7602: 'svg-parser',
          7946: 'image-panel',
          8216: 'handsontable-vue',
          8290: 'editor-text-resource',
          8350: 'design-page',
          8592: 'common',
          8640: 'watermark-content-panel',
          8692: 'install-matting-editor',
          8723: 'styled-text-panel',
          8805: 'editor-size-extension',
          8890: 'sketch-to-templet',
          8913: 'editor-panel',
          8944: 'editor-embed-copy',
          8967: 'logrocket',
          9010: 'material3d-panel',
          9044: 'video-panel',
          9150: 'music-list',
          9212: 'editor-bg-resource',
          9231: 'collage-panel',
          9392: 'qrcode-panel',
          9429: 'file-ms',
          9439: 'chart-element',
          9455: 'effect-text-element',
          9514: 'templet-to-pptx',
          9556: 'ali-oss',
          9586: 'advanced-setting-panel',
          9757: 'editor-my-resource',
          9887: 'filter-renderer',
          9965: 'background-panel'
        }[e] || e) +
        '.' +
        {
          43: 'de357c0e',
          60: '32847a72',
          114: 'c5e6483b',
          133: 'cba45674',
          166: 'dfb8616b',
          222: 'b88efd47',
          238: 'de7cf57e',
          264: 'bd7262b2',
          304: '86ef3437',
          331: 'a73a2e4e',
          552: 'fbaa9c94',
          565: '3ed9facb',
          674: 'b1d594fb',
          1050: 'd36d4bb6',
          1192: 'af97fe87',
          1288: 'f0d81eba',
          1343: 'f41087f4',
          1374: '4663cfdb',
          1578: '1b189bbc',
          1619: '22d563b0',
          1769: '38ce98f4',
          1777: '63c06d25',
          1827: '7d5a32dd',
          1850: 'c91618ae',
          2087: 'f715b3dc',
          2089: '0341bd71',
          2152: '6d2e2628',
          2194: '8e61aa5b',
          2423: '60243052',
          2474: 'c96629c4',
          2479: '87bbd271',
          2492: '12791698',
          2503: '1e0de8fa',
          2606: '01298cac',
          2712: 'ff948cce',
          2714: '51d7d5e3',
          2905: 'e72b24a6',
          3153: 'dc36c75f',
          3254: 'b06d2983',
          3290: '249f2d5e',
          3383: '27bb9239',
          3478: '6b48be31',
          3556: '890dbce7',
          3613: '5de495c0',
          3638: '3c1d0916',
          3692: 'e7f1fa62',
          3782: '44ebf0f5',
          3799: '938902c8',
          3819: 'ac168220',
          3833: '30491557',
          3873: '5a813ad3',
          3896: 'd9dfed05',
          3923: 'a1e372be',
          3932: '9c0fca89',
          4262: 'a31b1dee',
          4297: 'e83ab042',
          4373: '3364e1de',
          4414: '208094e4',
          4477: 'b54ba48f',
          4549: 'bd41f1b7',
          4570: 'f7f561bd',
          4589: '427d521d',
          4645: '6bca13ab',
          4672: 'fd38637c',
          4685: '8d130bc8',
          4741: '8df01699',
          4763: '8b3c5e10',
          4772: '30d6957a',
          4829: 'c72dc535',
          4926: '98808a0a',
          5073: 'bce47bbf',
          5105: 'ef00bb27',
          5143: 'f0b4d5bb',
          5195: 'a71f606f',
          5254: 'b1550acc',
          5275: 'ae5f84a6',
          5277: '6fc03427',
          5309: '33d147ce',
          5354: '7c473188',
          5564: '444529cc',
          5663: '4ec0be0b',
          5755: '53272298',
          5765: '466750ec',
          5783: 'df67e629',
          5791: 'dc99ef20',
          5820: '14a07480',
          5872: '73336ad7',
          5892: '07cc731f',
          5964: '404c0f3c',
          6044: 'fa2100ee',
          6086: 'cc13f890',
          6099: '95e5e2e2',
          6177: '5b4f7d05',
          6266: '475a6e42',
          6315: '43e088bc',
          6486: '8ac3d0dd',
          6508: '4ee36f2f',
          6563: '91315cf2',
          6592: 'f864a3c8',
          6791: '25ba5abd',
          6821: 'ebd351fd',
          6826: 'e1a8a93d',
          6994: 'ba8ef0b2',
          7080: 'd2855a74',
          7207: '70a06e17',
          7209: '31ce30fd',
          7211: 'e2a5e644',
          7306: '7fcc56b8',
          7397: '46316cb4',
          7431: '79b111e1',
          7470: 'f0e72dac',
          7511: '53444c6a',
          7583: '726993b1',
          7602: '4a2807d9',
          7826: '46fe8384',
          7946: 'ca42a0b3',
          7969: '265d5e4f',
          8105: '04ca6fc1',
          8216: '96fd77e7',
          8290: '3a2c5d73',
          8350: 'af776d33',
          8592: '0273b0ff',
          8640: 'fdfc3b6e',
          8668: '4c3342f1',
          8692: '4490bfc2',
          8723: '9cba1af6',
          8805: '2f2fbe53',
          8890: '4613631e',
          8913: 'ea2e13ab',
          8944: 'ca42de40',
          8967: 'c3e7bf4d',
          9010: '44c95b26',
          9044: '7d0d4c27',
          9150: 'b37e4024',
          9212: '7b47a730',
          9231: '81f9bcd3',
          9308: 'ae6e0aaa',
          9339: '54bb6f0c',
          9392: '81c2f04f',
          9429: 'f952765b',
          9439: 'b9f4269f',
          9455: 'cfd6a5bd',
          9514: '84a7b9d8',
          9556: '21b70470',
          9586: '25aedd35',
          9755: '48bbcd69',
          9757: 'b64cdc79',
          9812: '8c93f051',
          9887: '22e7e9e7',
          9889: 'a80a62a3',
          9965: '973f0afd'
        }[e] +
        '.js'
      )
    }),
    (l.miniCssF = function (e) {
      return (
        'css/' +
        ({
          133: 'scrambleDialog',
          238: 'punctuate-panel',
          264: 'editor-change-templet',
          552: 'editor-import-dialog',
          565: 'sdk-page',
          674: 'chart-panel',
          1050: 'animation',
          1288: 'editor-crop-dialog',
          1343: 'editor-component-resource',
          1374: 'editor-slide-layout',
          2089: 'editor-video-preview-dialog',
          2479: 'nine-patch-panel',
          2606: 'editor-share-popover',
          2905: 'editor-qrcode-dialog',
          3383: 'editor-widget-resource',
          3556: 'editor-preview-dialog',
          3638: 'group-panel',
          3873: 'svg-panel',
          3896: 'editor-templet-resource',
          4262: 'audio-panel',
          4373: 'widget-panel',
          4645: 'enterprise-templet-resource',
          4672: 'table-panel',
          4741: 'image-filter-panel',
          4772: 'editor-download-popover',
          4926: 'enterprise-element-resource',
          5195: 'map3d-color-picker',
          5275: 'editor-element-resource',
          5277: 'editor-exporter',
          5354: 'editor-commerial-dialog',
          5564: 'editor-upload-wechat',
          5663: 'text-panel',
          5892: 'editor-embed-create',
          6044: 'three-text-panel',
          6315: 'editor-chart-resource',
          6508: 'environment-light-map-panel',
          6821: 'editor-photo-resource',
          7080: 'watermark-style-panel',
          7207: 'editor-layout-dialog',
          7209: 'components_table',
          7306: 'table-element',
          7431: 'editor-template-print',
          7470: 'editor-buy-vip-popover',
          7946: 'image-panel',
          8290: 'editor-text-resource',
          8350: 'design-page',
          8640: 'watermark-content-panel',
          8723: 'styled-text-panel',
          8805: 'editor-size-extension',
          8913: 'editor-panel',
          8944: 'editor-embed-copy',
          9010: 'material3d-panel',
          9044: 'video-panel',
          9150: 'music-list',
          9212: 'editor-bg-resource',
          9231: 'collage-panel',
          9392: 'qrcode-panel',
          9586: 'advanced-setting-panel',
          9757: 'editor-my-resource',
          9965: 'background-panel'
        }[e] || e) +
        '.' +
        {
          133: 'a21f5700',
          238: '3f1076b4',
          264: 'e4f4e864',
          552: '67207314',
          565: 'd5d69bc9',
          674: '2e40ebc4',
          1050: 'dd60dab6',
          1288: '11844bfc',
          1343: '22b70a24',
          1374: 'd341b33e',
          1619: '0e2782b2',
          2089: 'd48c41e4',
          2479: 'cbc85226',
          2606: '99439e5e',
          2714: '0163a103',
          2905: '4669c09c',
          3383: '7b9503a7',
          3556: '9303f470',
          3638: 'a95ea167',
          3873: '9044944e',
          3896: '34ea68fa',
          4262: '1253f6ce',
          4373: '9bb72245',
          4645: 'd08c7fe3',
          4672: 'f0af0a7e',
          4741: 'c5e30b9b',
          4772: 'a9d4d950',
          4926: 'cdc4c4be',
          5195: 'b8b8c05a',
          5275: '5715c948',
          5277: '1445ffbb',
          5354: 'a8e79e29',
          5564: '78a4aba2',
          5663: '44a03686',
          5765: '9064fcc6',
          5872: '136e3320',
          5892: '126c0f30',
          6044: '11678487',
          6177: '0a9aa7ca',
          6315: 'bbe37548',
          6508: 'd1b471f2',
          6821: '431122f7',
          6826: 'a401c05c',
          7080: '0efe6fbe',
          7207: '2427ae74',
          7209: '01e6b41b',
          7306: '018f8ee2',
          7431: '65212ccb',
          7470: '73ad7bb2',
          7946: '97209b29',
          8290: '63fe4a21',
          8350: '341a9e37',
          8640: 'b4c8789c',
          8668: '01f9aa7f',
          8723: '456610d6',
          8805: '21b6c98b',
          8913: '9bd35c36',
          8944: 'c1a338e8',
          9010: '5931b032',
          9044: '1b93afe9',
          9150: '46a84d05',
          9212: '43ce4417',
          9231: '5918ca2f',
          9339: 'bc315472',
          9392: '6e437102',
          9586: '419c918a',
          9757: '4f58cd98',
          9965: '36d2377c'
        }[e] +
        '.css'
      )
    }),
    (l.g = (function () {
      if ('object' == typeof globalThis) return globalThis
      try {
        return this || new Function('return this')()
      } catch (e) {
        if ('object' == typeof window) return window
      }
    })()),
    (l.hmd = function (e) {
      return (
        (e = Object.create(e)).children || (e.children = []),
        Object.defineProperty(e, 'exports', {
          enumerable: !0,
          set: function () {
            throw new Error(
              'ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' +
                e.id
            )
          }
        }),
        e
      )
    }),
    (l.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (a = {}),
    (o = 'editor:'),
    (l.l = function (e, t, r, n) {
      if (a[e]) a[e].push(t)
      else {
        var d, i
        if (void 0 !== r)
          for (
            var c = document.getElementsByTagName('script'), f = 0;
            f < c.length;
            f++
          ) {
            var u = c[f]
            if (
              u.getAttribute('src') == e ||
              u.getAttribute('data-webpack') == o + r
            ) {
              d = u
              break
            }
          }
        d ||
          ((i = !0),
          ((d = document.createElement('script')).charset = 'utf-8'),
          (d.timeout = 120),
          l.nc && d.setAttribute('nonce', l.nc),
          d.setAttribute('data-webpack', o + r),
          (d.src = e)),
          (a[e] = [t])
        var p = function (t, r) {
            ;(d.onerror = d.onload = null), clearTimeout(s)
            var o = a[e]
            if (
              (delete a[e],
              d.parentNode && d.parentNode.removeChild(d),
              o &&
                o.forEach(function (e) {
                  return e(r)
                }),
              t)
            )
              return t(r)
          },
          s = setTimeout(
            p.bind(null, void 0, { type: 'timeout', target: d }),
            12e4
          )
        ;(d.onerror = p.bind(null, d.onerror)),
          (d.onload = p.bind(null, d.onload)),
          i && document.head.appendChild(d)
      }
    }),
    (l.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (l.nmd = function (e) {
      return (e.paths = []), e.children || (e.children = []), e
    }),
    (l.p = 'https://cdn.dancf.com/design/'),
    (n = function (e) {
      return new Promise(function (t, r) {
        var a = l.miniCssF(e),
          o = l.p + a
        if (
          (function (e, t) {
            for (
              var r = document.getElementsByTagName('link'), a = 0;
              a < r.length;
              a++
            ) {
              var o =
                (d = r[a]).getAttribute('data-href') || d.getAttribute('href')
              if ('stylesheet' === d.rel && (o === e || o === t)) return d
            }
            var n = document.getElementsByTagName('style')
            for (a = 0; a < n.length; a++) {
              var d
              if ((o = (d = n[a]).getAttribute('data-href')) === e || o === t)
                return d
            }
          })(a, o)
        )
          return t()
        !(function (e, t, r, a) {
          var o = document.createElement('link')
          ;(o.rel = 'stylesheet'),
            (o.type = 'text/css'),
            (o.onerror = o.onload =
              function (n) {
                if (((o.onerror = o.onload = null), 'load' === n.type)) r()
                else {
                  var d = n && ('load' === n.type ? 'missing' : n.type),
                    i = (n && n.target && n.target.href) || t,
                    c = new Error(
                      'Loading CSS chunk ' + e + ' failed.\n(' + i + ')'
                    )
                  ;(c.code = 'CSS_CHUNK_LOAD_FAILED'),
                    (c.type = d),
                    (c.request = i),
                    o.parentNode.removeChild(o),
                    a(c)
                }
              }),
            (o.href = t),
            document.head.appendChild(o)
        })(e, o, t, r)
      })
    }),
    (d = { 3666: 0 }),
    (l.f.miniCss = function (e, t) {
      d[e]
        ? t.push(d[e])
        : 0 !== d[e] &&
          {
            133: 1,
            238: 1,
            264: 1,
            552: 1,
            565: 1,
            674: 1,
            1050: 1,
            1288: 1,
            1343: 1,
            1374: 1,
            1619: 1,
            2089: 1,
            2479: 1,
            2606: 1,
            2714: 1,
            2905: 1,
            3383: 1,
            3556: 1,
            3638: 1,
            3873: 1,
            3896: 1,
            4262: 1,
            4373: 1,
            4645: 1,
            4672: 1,
            4741: 1,
            4772: 1,
            4926: 1,
            5195: 1,
            5275: 1,
            5277: 1,
            5354: 1,
            5564: 1,
            5663: 1,
            5765: 1,
            5872: 1,
            5892: 1,
            6044: 1,
            6177: 1,
            6315: 1,
            6508: 1,
            6821: 1,
            6826: 1,
            7080: 1,
            7207: 1,
            7209: 1,
            7306: 1,
            7431: 1,
            7470: 1,
            7946: 1,
            8290: 1,
            8350: 1,
            8640: 1,
            8668: 1,
            8723: 1,
            8805: 1,
            8913: 1,
            8944: 1,
            9010: 1,
            9044: 1,
            9150: 1,
            9212: 1,
            9231: 1,
            9339: 1,
            9392: 1,
            9586: 1,
            9757: 1,
            9965: 1
          }[e] &&
          t.push(
            (d[e] = n(e).then(
              function () {
                d[e] = 0
              },
              function (t) {
                throw (delete d[e], t)
              }
            ))
          )
    }),
    (function () {
      var e = { 3666: 0 }
      ;(l.f.j = function (t, r) {
        var a = l.o(e, t) ? e[t] : void 0
        if (0 !== a)
          if (a) r.push(a[2])
          else if (/^(6(177|315|826)|3666|5663|7946)$/.test(t)) e[t] = 0
          else {
            var o = new Promise(function (r, o) {
              a = e[t] = [r, o]
            })
            r.push((a[2] = o))
            var n = l.p + l.u(t),
              d = new Error()
            l.l(
              n,
              function (r) {
                if (l.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ('load' === r.type ? 'missing' : r.type),
                    n = r && r.target && r.target.src
                  ;(d.message =
                    'Loading chunk ' + t + ' failed.\n(' + o + ': ' + n + ')'),
                    (d.name = 'ChunkLoadError'),
                    (d.type = o),
                    (d.request = n),
                    a[1](d)
                }
              },
              'chunk-' + t,
              t
            )
          }
      }),
        (l.O.j = function (t) {
          return 0 === e[t]
        })
      var t = function (t, r) {
          var a,
            o,
            n = r[0],
            d = r[1],
            i = r[2],
            c = 0
          if (
            n.some(function (t) {
              return 0 !== e[t]
            })
          ) {
            for (a in d) l.o(d, a) && (l.m[a] = d[a])
            if (i) var f = i(l)
          }
          for (t && t(r); c < n.length; c++)
            (o = n[c]), l.o(e, o) && e[o] && e[o][0](), (e[o] = 0)
          return l.O(f)
        },
        r = (self.webpackChunkeditor = self.webpackChunkeditor || [])
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)))
    })()
})()
