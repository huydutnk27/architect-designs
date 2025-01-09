export {};

declare global {
    namespace ExtJS {
        interface Window {
            applyElevateZoom: () => void
        }
    }
}