import { ReactNode } from "react"

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
    width: any,
    height: string,
    var1: any,
    var2: any,
    position: any,
    classes?: string,
    dur: number,
    del: number
}

export interface aniPropsSlide {
    children: JSX.Element,
    width: any,
    height: string
    var1: any,
    var2: any,
    var3: any,
    var4: any,
    position: any,
    classes?: string
    dur: number,
    del: number
}

export interface trackComp {
    track: ReactNode,
    name: string
}