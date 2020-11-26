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
exports.PartnersBusinessPage = void 0;

var core_1 = require("@angular/core");

var PartnersBusinessPage =
/** @class */
function () {
  function PartnersBusinessPage(userAPI, loadingController, formBuilder, transfer, zone, router, service, http, toastCtrl, fileChooser, alertController) {
    var _this = this;

    this.userAPI = userAPI;
    this.loadingController = loadingController;
    this.formBuilder = formBuilder;
    this.transfer = transfer;
    this.zone = zone;
    this.router = router;
    this.service = service;
    this.http = http;
    this.toastCtrl = toastCtrl;
    this.fileChooser = fileChooser;
    this.alertController = alertController;
    this.items = []; // this.loanid = '74';

    this.loanid = this.service.getLoanid();
    this.userAPI.getuserloan(localStorage.getItem('id'), this.loanid).subscribe(function (res) {
      _this.zone.run(function () {
        console.log(res);

        if (res.data.loan_type == 'business_loan') {
          switch (res.data.customer_type) {
            // case 'partnership':
            //   break;
            case 'pvt_ltd':
              _this.heading = 'Director';
              break;

            case 'trust':
              _this.heading = 'Trustee';
              break;

            case 'society':
              _this.heading = 'Society member';
              break;

            default:
              _this.heading = 'Partner';
              break;
          }
        }
      });
    });
  }

  PartnersBusinessPage.prototype.getpartners = function () {
    var _this = this; // businesspartners


    this.userAPI.getBussinessPartners(localStorage.getItem('id'), this.loanid).subscribe(function (res) {
      _this.zone.run(function () {
        console.log(res);

        if (res.isSuccess) {
          _this.items = res.data;
        }
      });
    });
  };

  PartnersBusinessPage.prototype.ngOnInit = function () {
    this.getpartners();
  };

  PartnersBusinessPage.prototype.onToast = function (text) {
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

  PartnersBusinessPage.prototype.partnerAdd = function () {
    return __awaiter(this, void 0, void 0, function () {
      var alert;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.alertController.create({
              header: 'Adding Partner!',
              backdropDismiss: false,
              message: 'Please fill the required fields',
              inputs: [{
                name: 'name1',
                type: 'text',
                placeholder: 'Partner Name'
              }, {
                name: 'share',
                type: 'number',
                placeholder: 'Share Holding'
              }],
              buttons: [{
                text: 'Ok',
                handler: function handler(alertData) {
                  if (alertData.name1.length == 0 || alertData.share.length == 0) {
                    _this.onToast('please fill all the details');

                    return false;
                  } else {
                    _this.http.get(_this.service.getBackenEndUrl() + 'Login/businessaddpartner/' + localStorage.getItem('id') + '/' + encodeURIComponent(_this.loanid) + '/' + encodeURIComponent(alertData.name1) + '/' + encodeURIComponent(alertData.share)).pipe().subscribe(function (res) {
                      _this.zone.run(function () {
                        if (res.isSuccess) {
                          // // this.form.setValue([name,res]);
                          // this.form.reset();
                          _this.getpartners();
                        } else {
                          _this.onToast(res.message);
                        }
                      });
                    });
                  }
                }
              }, {
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
                handler: function handler() {
                  console.log('Confirm Cancel');
                }
              }]
            })];

          case 1:
            alert = _a.sent();
            return [4
            /*yield*/
            , alert.present()];

          case 2:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  PartnersBusinessPage.prototype.fileupload = function (item, type) {
    var _this = this;

    console.log(item);
    console.log(type);
    this.fileChooser.open({
      "mime": "application/pdf"
    }).then(function (uri) {
      console.log(uri);

      var fileTransfer = _this.transfer.create();

      var filename = +new Date() + _this.loanid + '-bpartner-' + type + '-id-' + item.id;
      var idproof = type; // regarding detailed description of this you cn just refere ionic 2 transfer plugin in official website

      var options1 = {
        fileKey: 'file',
        fileName: filename + '.pdf',
        headers: {},
        params: {
          "app_key": "Testappkey"
        },
        chunkedMode: false
      };

      _this.loadingController.create({
        message: 'Uploading... ' + _this.uploadPercent + '% '
      }).then(function (res) {
        res.present();
      });

      fileTransfer.onProgress(function (data) {
        _this.uploadPercent = Math.round(data.loaded / data.total * 100);
      });
      fileTransfer.upload(uri, encodeURI(_this.service.getBackenEndUrl() + 'Login/apploanupload/' + _this.loanid), options1).then(function (data) {
        // success
        // loading.dismiss()
        var dataObject;
        Object.keys(data).map(function (key) {
          if (key == 'response') {
            dataObject = JSON.parse(data[key]);
          }
        });

        if (dataObject.isSuccess) {
          //  alertData.name1 + " FromDate:" + alertData.From + "EndDate:" + alertData.To;
          switch (type) {
            case 'idproof':
              item.idproof = dataObject.target_path;
              break;

            case 'addressproof':
              item.addressproof = dataObject.target_path;
              break;

            case 'ownhouseproof':
              item.ownhouse = dataObject.target_path;
              break;

            case 'latestitr':
              item.latestitr = dataObject.target_path;
              break;

            case 'previousitr':
              item.prevoiusitr = dataObject.target_path;
              break;

            default:
              break;
          }

          var formdata = {
            path: dataObject.target_path,
            userid: localStorage.getItem('id'),
            loanid: _this.loanid,
            id: item.id,
            partnername: item.partnername,
            addressproof: item.addressproof,
            idproof1: item.idproof,
            latestitr: item.latestitr,
            ownhouse: item.ownhouse,
            prevoiusitr: item.prevoiusitr,
            share: item.share,
            isLoan: 6,
            idproof: idproof
          };

          _this.http.post(_this.service.getBackenEndUrl() + 'api/test', formdata).pipe().subscribe(function (res) {
            _this.loadingController.dismiss(null, 'cancel');

            _this.zone.run(function () {
              if (res.isSuccess) {
                _this.onToast(res.message);

                _this.getpartners();
              } else {
                _this.onToast(res.message);
              }
            });
          }, function (err) {
            alert(err);

            _this.loadingController.dismiss(null, 'cancel');
          });
        } else {
          _this.loadingController.dismiss(null, 'cancel');
        }
      }, function (err) {// error
      });
    })["catch"](function (e) {
      return console.log(e);
    }); // return false;
  };

  PartnersBusinessPage.prototype.nextpage = function () {
    if (this.items.length == 0) {
      this.onToast("Please add atleast add one partner ");
    } else {
      this.service.setLoanPage(JSON.stringify({
        step: '/loan-documnets-upload-business',
        status: 'incomplete',
        msg: 'Please complete the previous loan',
        action: 'segmentNine',
        redirectto: false
      }));
      this.router.navigate(['/loan-documnets-upload-business']);
    }
  };

  PartnersBusinessPage = __decorate([core_1.Component({
    selector: 'app-partners-business',
    templateUrl: './partners-business.page.html',
    styleUrls: ['./partners-business.page.scss']
  })], PartnersBusinessPage);
  return PartnersBusinessPage;
}();

exports.PartnersBusinessPage = PartnersBusinessPage;