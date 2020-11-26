"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

exports.__esModule = true;
exports.SegmentHeaderTextPage = void 0;

var animations_1 = require("@angular/animations");

var core_1 = require("@angular/core");

var SegmentHeaderTextPage =
/** @class */
function () {
  function SegmentHeaderTextPage(userAPI, formBuilder, transfer, zone, router, fileChooser, service, http, toastCtrl, camera) {
    this.userAPI = userAPI;
    this.formBuilder = formBuilder;
    this.transfer = transfer;
    this.zone = zone;
    this.router = router;
    this.fileChooser = fileChooser;
    this.service = service;
    this.http = http;
    this.toastCtrl = toastCtrl;
    this.camera = camera;
    this.segments = 'segmentOne';
    this.sliderConfig = {
      slidesPerView: 2.2,
      spaceBetween: 0
    };
    this.isFileUpload = false;
    this.isimage = false;
    this.isimage1 = false;
    this.image = '';
    this.image1 = '';
    this.imageData1 = '';
    this.imageData = '';
    this.itemColor = ["#03A9F4"];
  }

  SegmentHeaderTextPage.prototype.ngOnInit = function () {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.userAPI.showLoader()];

          case 1:
            _a.sent();

            this.userAPI.getcategory().subscribe(function (res) {
              _this.zone.run(function () {
                console.log(res);

                if (res.isSuccess) {
                  _this.subcategory = res.subcategory;
                }

                _this.userAPI.hideLoader();
              });
            });
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  SegmentHeaderTextPage.prototype.nextpage = function () {
    if (this.segments === 'segmentTwo') {
      this.router.navigate(['/home']);
    } else {
      this.segments = 'segmentTwo';
    }
  };

  SegmentHeaderTextPage.prototype.openCam = function () {
    var _this = this;

    var options = {
      quality: 80,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then(function (imageData) {
      _this.imageData = imageData;
      _this.image = window.Ionic.WebView.convertFileSrc(imageData);
      _this.isimage = true;
    }, function (err) {
      // Handle error
      alert("error " + JSON.stringify(err));
    });
  };

  SegmentHeaderTextPage.prototype.openCam1 = function () {
    var _this = this;

    var options = {
      quality: 80,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then(function (imageData) {
      _this.imageData1 = imageData;
      _this.image1 = window.Ionic.WebView.convertFileSrc(imageData);
      _this.isimage1 = true;
    }, function (err) {
      // Handle error
      alert("error " + JSON.stringify(err));
    });
  };

  SegmentHeaderTextPage.prototype.openFile = function () {
    var _this = this;

    this.fileChooser.open({
      "mime": "application/pdf"
    }).then(function (uri) {
      _this.isFileUpload = true;
      _this.UriFileUpload = uri;

      _this.uploadFile();
    })["catch"](function (e) {
      return console.log(e);
    });
  };

  SegmentHeaderTextPage.prototype.onToast = function (text) {
    return __awaiter(this, void 0, void 0, function () {
      var toast;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.toastCtrl.create({
              cssClass: 'toastTag',
              color: "success",
              showCloseButton: true,
              position: 'top',
              message: text,
              closeButtonText: '| Done',
              duration: 2000
            })];

          case 1:
            toast = _a.sent();
            toast.present();
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  SegmentHeaderTextPage.prototype.uploadFile = function () {
    return __awaiter(this, void 0, void 0, function () {
      var isId, filename, idproof, imageData, filename, idproof, imageData, fileTransfer, options1;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            isId = true;

            if (this.segments === 'segmentTwo') {
              if (!this.addressproof) {
                isId = false;
              } else {
                filename = localStorage.getItem('id') + '-' + this.addressproof.replace(/\s/g, "") + '-addressproof.jpg';
                idproof = this.addressproof;
                imageData = this.imageData1;
                this.onToast("addressproof");
              }
            } else {
              if (!this.idproof) {
                isId = false;
              } else {
                filename = localStorage.getItem('id') + '-' + this.idproof.replace(/\s/g, "") + '-idproof.jpg';
                idproof = this.idproof;
                imageData = this.imageData;
                this.onToast("idproof");
              }
            }

            if (!isId) return [3
            /*break*/
            , 2];
            return [4
            /*yield*/
            , this.userAPI.showLoader()];

          case 1:
            _a.sent();

            this.userAPI.showLoader();
            fileTransfer = this.transfer.create();
            options1 = void 0;

            if (this.isFileUpload) {
              // regarding detailed description of this you cn just refere ionic 2 transfer plugin in official website
              options1 = {
                fileKey: 'file',
                fileName: filename + '.pdf',
                headers: {},
                params: {
                  "app_key": "Testappkey"
                },
                chunkedMode: false
              };
            } else {
              options1 = {
                fileKey: 'file',
                fileName: filename,
                chunkedMode: false,
                headers: {
                  id: localStorage.getItem('id')
                },
                params: {
                  id: localStorage.getItem('id')
                }
              };
            }

            fileTransfer.upload(imageData, encodeURI(this.service.getBackenEndUrl() + 'Login/appupload'), options1).then(function (data) {
              // success
              // loading.dismiss()
              _this.userAPI.hideLoader();

              var dataObject;
              Object.keys(data).map(function (key) {
                if (key == 'response') {
                  dataObject = JSON.parse(data[key]);
                }

                console.log(data[key], key);
              });
              console.log(dataObject);
              alert(dataObject.message);

              if (dataObject.isSuccess) {
                var formdata = {
                  path: '/assets/img/temp/' + filename,
                  userid: localStorage.getItem('id'),
                  loanid: '',
                  isLoan: 0,
                  idproof: idproof
                };

                _this.http.post(_this.service.getBackenEndUrl() + 'api/test', formdata).pipe().subscribe(function (res) {
                  _this.zone.run(function () {
                    if (res.isSuccess) {
                      _this.onToast(res.message);

                      _this.image = '';
                      _this.imageData = '';

                      if (_this.segments === 'segmentTwo') {
                        _this.router.navigate(['/home']);
                      } else {
                        _this.segments = 'segmentTwo';
                      }
                    } else {
                      _this.onToast(res.message);
                    }

                    _this.userAPI.hideLoader();
                  });
                });
              } else {
                _this.userAPI.hideLoader();
              }
            }, function (err) {
              // error
              alert("error" + JSON.stringify(err));
            });
            return [3
            /*break*/
            , 3];

          case 2:
            alert('Please select id proof');
            _a.label = 3;

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  SegmentHeaderTextPage = __decorate([core_1.Component({
    selector: 'app-segment-header-text',
    templateUrl: './segment-header-text.page.html',
    styleUrls: ['./segment-header-text.page.scss'],
    animations: [animations_1.trigger('itemState', [animations_1.transition('void => *', [animations_1.style({
      transform: 'translateX(200%)'
    }), animations_1.animate('300ms ease-in')])])]
  })], SegmentHeaderTextPage);
  return SegmentHeaderTextPage;
}();

exports.SegmentHeaderTextPage = SegmentHeaderTextPage;