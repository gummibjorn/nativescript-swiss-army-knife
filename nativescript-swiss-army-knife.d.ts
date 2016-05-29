import { View } from 'ui/core/view';
import { LayoutBase } from 'ui/layouts/layout-base';
import { ScrollView } from 'ui/scroll-view';
import { ListView } from 'ui/list-view';
import { ActionItem } from 'ui/action-bar';
export interface IScreenHeight {
    portrait: number;
    landscape: number;
}
export declare class SwissArmyKnife {
    android: any;
    ios: any;
    static pluckChildViewsFromLayout(parent: LayoutBase): Array<View>;
    static disableScrollBounce(view: ScrollView | ListView): void;
    static removeHorizontalScrollBars(view: ScrollView | ListView): void;
    static removeVerticalScrollBars(view: ScrollView | ListView): void;
    static getScreenHeight(): IScreenHeight;
    static actionBarSetTitle(title: string): void;
    static actionBarAddButton(button: ActionItem): void;
    static actionBarClearButtons(): void;
    static actionBarHideBackButton(): void;
    static actionBarSetStatusBarStyle(style: number): void;
    
}
