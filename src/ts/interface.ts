export interface carInfo {
    id: number,
    name: string,
    t1: string,
    t2: string,
    t3: string,
    video: string
}

export interface aniProps {
    children: JSX.Element,
    width: "fit-content" | "100%",
    height: string,
    var1: any,
    var2: any,
}

export interface aniPropsSlide {
    children: JSX.Element,
    width: "fit-content" | "100%",
    height: string
    var1: any,
    var2: any,
    var3: any,
    var4: any
}