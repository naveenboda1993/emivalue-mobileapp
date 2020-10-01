import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'list-infinte-scroll', loadChildren: './list-infinte-scroll/list-infinte-scroll.module#ListInfinteScrollPageModule' },
  { path: 'list-refresher', loadChildren: './list-refresher/list-refresher.module#ListRefresherPageModule' },
  { path: 'list-slide-left', loadChildren: './list-slide-left/list-slide-left.module#ListSlideLeftPageModule' },
  { path: 'list-slide-right', loadChildren: './list-slide-right/list-slide-right.module#ListSlideRightPageModule' },
  { path: 'list-fade-in', loadChildren: './list-fade-in/list-fade-in.module#ListFadeInPageModule' },
  { path: 'list-swipe-thumbnail-products', loadChildren: './list-swipe-thumbnail-products/list-swipe-thumbnail-products.module#ListSwipeThumbnailProductsPageModule' },
  { path: 'list-swipe-full-image', loadChildren: './list-swipe-full-image/list-swipe-full-image.module#ListSwipeFullImagePageModule' },
  { path: 'list-swipe-with-header', loadChildren: './list-swipe-with-header/list-swipe-with-header.module#ListSwipeWithHeaderPageModule' },
  { path: 'list-swipe-left-to-right', loadChildren: './list-swipe-left-to-right/list-swipe-left-to-right.module#ListSwipeLeftToRightPageModule' },
  { path: 'list-swipe-right-to-left', loadChildren: './list-swipe-right-to-left/list-swipe-right-to-left.module#ListSwipeRightToLeftPageModule' },
  { path: 'list-reorder', loadChildren: './list-reorder/list-reorder.module#ListReorderPageModule' },
  { path: 'list-expandable', loadChildren: './list-expandable/list-expandable.module#ListExpandablePageModule' },
  { path: 'grid-two-line', loadChildren: './grid-two-line/grid-two-line.module#GridTwoLinePageModule' },
  { path: 'grid-three-line', loadChildren: './grid-three-line/grid-three-line.module#GridThreeLinePageModule' },
  { path: 'grid-category', loadChildren: './grid-category/grid-category.module#GridCategoryPageModule' },
  { path: 'grid-subcategory', loadChildren: './grid-subcategory/grid-subcategory.module#GridSubcategoryPageModule' },
  { path: 'grid-album', loadChildren: './grid-album/grid-album.module#GridAlbumPageModule' },
  { path: 'grid-section', loadChildren: './grid-section/grid-section.module#GridSectionPageModule' },
  { path: 'grid-with-header', loadChildren: './grid-with-header/grid-with-header.module#GridWithHeaderPageModule' },
  { path: 'card-dashboard', loadChildren: './card-dashboard/card-dashboard.module#CardDashboardPageModule' },
  { path: 'card-list-simple', loadChildren: './card-list-simple/card-list-simple.module#CardListSimplePageModule' },
  { path: 'card-list-avatar', loadChildren: './card-list-avatar/card-list-avatar.module#CardListAvatarPageModule' },
  { path: 'card-shoping-simple', loadChildren: './card-shoping-simple/card-shoping-simple.module#CardShopingSimplePageModule' },
  { path: 'card-shoping-slider', loadChildren: './card-shoping-slider/card-shoping-slider.module#CardShopingSliderPageModule' },
  { path: 'card-timeline-theme-one', loadChildren: './card-timeline-theme-one/card-timeline-theme-one.module#CardTimelineThemeOnePageModule' },
  { path: 'card-timeline-theme-two', loadChildren: './card-timeline-theme-two/card-timeline-theme-two.module#CardTimelineThemeTwoPageModule' },
  { path: 'card-timeline-theme-three', loadChildren: './card-timeline-theme-three/card-timeline-theme-three.module#CardTimelineThemeThreePageModule' },
  { path: 'card-images', loadChildren: './card-images/card-images.module#CardImagesPageModule' },
  { path: 'slider-simple', loadChildren: './slider-simple/slider-simple.module#SliderSimplePageModule' },
  { path: 'slider-images', loadChildren: './slider-images/slider-images.module#SliderImagesPageModule' },
  { path: 'slider-autoplay', loadChildren: './slider-autoplay/slider-autoplay.module#SliderAutoplayPageModule' },
  { path: 'slider-arrows', loadChildren: './slider-arrows/slider-arrows.module#SliderArrowsPageModule' },
  { path: 'tab-footer-text', loadChildren: './tab-footer-text/tab-footer-text.module#TabFooterTextPageModule' },
  { path: 'tab-footer-icon', loadChildren: './tab-footer-icon/tab-footer-icon.module#TabFooterIconPageModule' },
  { path: 'tab-footer-text-icon', loadChildren: './tab-footer-text-icon/tab-footer-text-icon.module#TabFooterTextIconPageModule' },
  { path: 'tab-footer-text-icon-badge', loadChildren: './tab-footer-text-icon-badge/tab-footer-text-icon-badge.module#TabFooterTextIconBadgePageModule' },
  { path: 'tab-header-text', loadChildren: './tab-header-text/tab-header-text.module#TabHeaderTextPageModule' },
  { path: 'tab-header-icon', loadChildren: './tab-header-icon/tab-header-icon.module#TabHeaderIconPageModule' },
  { path: 'tab-header-text-icon', loadChildren: './tab-header-text-icon/tab-header-text-icon.module#TabHeaderTextIconPageModule' },
  { path: 'tab-header-text-icon-badge', loadChildren: './tab-header-text-icon-badge/tab-header-text-icon-badge.module#TabHeaderTextIconBadgePageModule' },
  { path: 'segment-header-text', loadChildren: './segment-header-text/segment-header-text.module#SegmentHeaderTextPageModule' },
  { path: 'loan-documnets-upload', loadChildren: './loan-documnets-upload/loan-documnets-upload.module#LoanDocumnetsUploadTextPageModule' },
  { path: 'segment-header-icon', loadChildren: './segment-header-icon/segment-header-icon.module#SegmentHeaderIconPageModule' },
  { path: 'segment-scrollable-header-text', loadChildren: './segment-scrollable-header-text/segment-scrollable-header-text.module#SegmentScrollableHeaderTextPageModule' },
  { path: 'segment-scrollable-header-icon', loadChildren: './segment-scrollable-header-icon/segment-scrollable-header-icon.module#SegmentScrollableHeaderIconPageModule' },
  { path: 'segment-footer-text', loadChildren: './segment-footer-text/segment-footer-text.module#SegmentFooterTextPageModule' },
  { path: 'segment-footer-icon', loadChildren: './segment-footer-icon/segment-footer-icon.module#SegmentFooterIconPageModule' },
  { path: 'segment-footer-text-icon', loadChildren: './segment-footer-text-icon/segment-footer-text-icon.module#SegmentFooterTextIconPageModule' },
  { path: 'button-basic-one', loadChildren: './button-basic-one/button-basic-one.module#ButtonBasicOnePageModule' },
  { path: 'button-basic-two', loadChildren: './button-basic-two/button-basic-two.module#ButtonBasicTwoPageModule' },
  { path: 'button-text', loadChildren: './button-text/button-text.module#ButtonTextPageModule' },
  { path: 'button-outline', loadChildren: './button-outline/button-outline.module#ButtonOutlinePageModule' },
  { path: 'button-transparent', loadChildren: './button-transparent/button-transparent.module#ButtonTransparentPageModule' },
  { path: 'button-expand', loadChildren: './button-expand/button-expand.module#ButtonExpandPageModule' },
  { path: 'radio-simple-left', loadChildren: './radio-simple-left/radio-simple-left.module#RadioSimpleLeftPageModule' },
  { path: 'radio-simple-right', loadChildren: './radio-simple-right/radio-simple-right.module#RadioSimpleRightPageModule' },
  { path: 'radio-circle-with-avatar', loadChildren: './radio-circle-with-avatar/radio-circle-with-avatar.module#RadioCircleWithAvatarPageModule' },
  { path: 'radio-square-with-big-image', loadChildren: './radio-square-with-big-image/radio-square-with-big-image.module#RadioSquareWithBigImagePageModule' },
  { path: 'checkbox-simple', loadChildren: './checkbox-simple/checkbox-simple.module#CheckboxSimplePageModule' },
  { path: 'checkbox-square', loadChildren: './checkbox-square/checkbox-square.module#CheckboxSquarePageModule' },
  { path: 'checkbox-right-with-avatar', loadChildren: './checkbox-right-with-avatar/checkbox-right-with-avatar.module#CheckboxRightWithAvatarPageModule' },
  { path: 'checkbox-with-big-image', loadChildren: './checkbox-with-big-image/checkbox-with-big-image.module#CheckboxWithBigImagePageModule' },
  { path: 'badge-with-card', loadChildren: './badge-with-card/badge-with-card.module#BadgeWithCardPageModule' },
  { path: 'badge-with-tab', loadChildren: './badge-with-tab/badge-with-tab.module#BadgeWithTabPageModule' },
  { path: 'badge-with-list', loadChildren: './badge-with-list/badge-with-list.module#BadgeWithListPageModule' },
  { path: 'toggle-with-avatar', loadChildren: './toggle-with-avatar/toggle-with-avatar.module#ToggleWithAvatarPageModule' },
  { path: 'toggle-simple-left', loadChildren: './toggle-simple-left/toggle-simple-left.module#ToggleSimpleLeftPageModule' },
  { path: 'searchbar-simple', loadChildren: './searchbar-simple/searchbar-simple.module#SearchbarSimplePageModule' },
  { path: 'searchbar-with-images', loadChildren: './searchbar-with-images/searchbar-with-images.module#SearchbarWithImagesPageModule' },
  { path: 'fab-simple-text', loadChildren: './fab-simple-text/fab-simple-text.module#FabSimpleTextPageModule' },
  { path: 'fab-simple-icon', loadChildren: './fab-simple-icon/fab-simple-icon.module#FabSimpleIconPageModule' },
  { path: 'fab-up-text', loadChildren: './fab-up-text/fab-up-text.module#FabUpTextPageModule' },
  { path: 'fab-up-icon', loadChildren: './fab-up-icon/fab-up-icon.module#FabUpIconPageModule' },
  { path: 'fab-down-text', loadChildren: './fab-down-text/fab-down-text.module#FabDownTextPageModule' },
  { path: 'fab-down-icon', loadChildren: './fab-down-icon/fab-down-icon.module#FabDownIconPageModule' },
  { path: 'fab-left-text', loadChildren: './fab-left-text/fab-left-text.module#FabLeftTextPageModule' },
  { path: 'fab-left-icon', loadChildren: './fab-left-icon/fab-left-icon.module#FabLeftIconPageModule' },
  { path: 'fab-right-text', loadChildren: './fab-right-text/fab-right-text.module#FabRightTextPageModule' },
  { path: 'fab-right-icon', loadChildren: './fab-right-icon/fab-right-icon.module#FabRightIconPageModule' },
  { path: 'fab-middle-text', loadChildren: './fab-middle-text/fab-middle-text.module#FabMiddleTextPageModule' },
  { path: 'fab-middle-icon', loadChildren: './fab-middle-icon/fab-middle-icon.module#FabMiddleIconPageModule' },
  { path: 'alert-basic', loadChildren: './alert-basic/alert-basic.module#AlertBasicPageModule' },
  { path: 'alert-confirmation', loadChildren: './alert-confirmation/alert-confirmation.module#AlertConfirmationPageModule' },
  { path: 'alert-prompt', loadChildren: './alert-prompt/alert-prompt.module#AlertPromptPageModule' },
  { path: 'alert-radio', loadChildren: './alert-radio/alert-radio.module#AlertRadioPageModule' },
  { path: 'alert-checkbox', loadChildren: './alert-checkbox/alert-checkbox.module#AlertCheckboxPageModule' },
  { path: 'toast-bottom', loadChildren: './toast-bottom/toast-bottom.module#ToastBottomPageModule' },
  { path: 'toast-middle', loadChildren: './toast-middle/toast-middle.module#ToastMiddlePageModule' },
  { path: 'toast-top', loadChildren: './toast-top/toast-top.module#ToastTopPageModule' },
  { path: 'actionsheet-simple', loadChildren: './actionsheet-simple/actionsheet-simple.module#ActionsheetSimplePageModule' },
  { path: 'actionsheet-icon', loadChildren: './actionsheet-icon/actionsheet-icon.module#ActionsheetIconPageModule' },
  { path: 'parallax-header-image', loadChildren: './parallax-header-image/parallax-header-image.module#ParallaxHeaderImagePageModule' },
  { path: 'form-login-one', loadChildren: './form-login-one/form-login-one.module#FormLoginOnePageModule' },
  { path: 'form-login-two', loadChildren: './form-login-two/form-login-two.module#FormLoginTwoPageModule' },
  { path: 'form-login-three', loadChildren: './form-login-three/form-login-three.module#FormLoginThreePageModule' },
  { path: 'form-register-one', loadChildren: './form-register-one/form-register-one.module#FormRegisterOnePageModule' },
  { path: 'form-register-two', loadChildren: './form-register-two/form-register-two.module#FormRegisterTwoPageModule' },
  { path: 'form-register-three', loadChildren: './form-register-three/form-register-three.module#FormRegisterThreePageModule' },
  { path: 'form-personal-loan', loadChildren: './form-personal-loan/form-personal-loan.module#FormPersonalPageModule' },
  { path: 'grid-slider', loadChildren: './grid-slider/grid-slider.module#GridSliderPageModule' },
  { path: 'grid-subcategory-two', loadChildren: './grid-subcategory-two/grid-subcategory-two.module#GridSubcategoryTwoPageModule' },
  { path: 'tab-chat', loadChildren: './tab-chat/tab-chat.module#TabChatPageModule' },
  { path: 'tab-status', loadChildren: './tab-status/tab-status.module#TabStatusPageModule' },
  { path: 'tab-call', loadChildren: './tab-call/tab-call.module#TabCallPageModule' },
  { path: 'badge-movie', loadChildren: './badge-movie/badge-movie.module#BadgeMoviePageModule' },
  { path: 'badge-card', loadChildren: './badge-card/badge-card.module#BadgeCardPageModule' },
  { path: 'badge-setting', loadChildren: './badge-setting/badge-setting.module#BadgeSettingPageModule' },
  // { path: 'component-details', loadChildren: './component-details/component-details.module#ComponentDetailsPageModule' },
  { path: 'component-details', redirectTo: 'home', pathMatch: 'full' },
  { path: 'intro', loadChildren: './intro/intro.module#IntroPageModule' },
  { path: 'form-forget-one', loadChildren: './form-forget-one/form-forget-one.module#FormForgetOnePageModule' },
  { path: 'form-forget-two', loadChildren: './form-forget-two/form-forget-two.module#FormForgetTwoPageModule' },
  { path: 'form-forget-three', loadChildren: './form-forget-three/form-forget-three.module#FormForgetThreePageModule' },
  //
  { path: 'register-personal-loan', loadChildren: './register-personal-loan/register-personal-loan.module#RegisterPersonalLoanPageModule' },
  { path: 'register-personal-loan2', loadChildren: './register-personal-loan2/register-personal-loan2.module#RegisterPersonalLoan2PageModule' },
  { path: 'success-page', loadChildren: './success-page/success-page.module#SuccessPagePageModule' },
  { path: 'tracker', loadChildren: './tracker/tracker.module#TrackerPageModule' },
  { path: 'refer', loadChildren: './refer/refer.module#ReferPageModule' },
  { path: 'refer-earn', loadChildren: './refer-earn/refer-earn.module#ReferEarnPageModule' },
  { path: 'myaccount', loadChildren: './myaccount/myaccount.module#MyaccountPageModule' },
  { path: 'my-details', loadChildren: './my-details/my-details.module#MyDetailsPageModule' },
  { path: 'my-banks', loadChildren: './my-banks/my-banks.module#MyBanksPageModule' },
  { path: 'list-of-upload-files', loadChildren: './list-of-upload-files/list-of-upload-files.module#ListOfUploadFilesPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
