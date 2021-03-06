import { IRectangle } from "./Rectangle";

export interface IDesktopWindow {
    blur(): Promise<void>;
    center(): Promise<void>;
    close(): Promise<void>;
    flashFrame(flash: boolean): Promise<void>;
    focus(): Promise<void>;
    getBounds(): Promise<IRectangle>;
    getMinimumSize(): Promise<number[]>;
    hide(): Promise<void>;
    isAlwaysOnTop(): Promise<boolean>;
    isCloseable(): Promise<boolean>;
    isEnabled(): Promise<boolean>;
    isFocused(): Promise<boolean>;
    isFullscreen(): Promise<boolean>;
    isFullscreenable(): Promise<boolean>;
    isKiosk(): Promise<boolean>;
    isMaximizable(): Promise<boolean>;
    isMaximized(): Promise<boolean>;
    isMenuBarAutoHide(): Promise<boolean>;
    isMenuBarVisible(): Promise<boolean>;
    isMinimizable(): Promise<boolean>;
    isMinimized(): Promise<boolean>;
    isModal(): Promise<boolean>;
    isMovable(): Promise<boolean>;
    isResizable(): Promise<boolean>;
    isVisible(): Promise<boolean>;
    maximize(): Promise<boolean>;
    minimize(): Promise<boolean>;
    moveTop(): Promise<boolean>;
    reload(): Promise<boolean>;
    restore(): Promise<boolean>;
    setAlwaysOnTop(flag: boolean): Promise<void>;
    setBounds(bounds: Partial<IRectangle>, animate?: boolean): Promise<void>;
    setFullScreen(flag: boolean): Promise<void>;
    setKiosk(flag: boolean): Promise<void>;
    show(): Promise<void>;
}
