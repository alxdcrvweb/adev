import { injectable } from 'inversify'
import {  configure, makeObservable, observable } from 'mobx'
import 'reflect-metadata'
import { RootStore } from './RootStore'

configure({
    enforceActions: "never",
  });
@injectable()
export class UserStore {
    @observable loaded: boolean = false
    @observable visible: boolean = true
    @observable containerHeight: number = 0
    @observable sliderAlignmentTop:number = 0
    @observable sliderPosition:number = 0
    public constructor(private readonly rootStore: RootStore) {
        makeObservable(this)
    }
    setContainerHeight(height:number) {
        this.containerHeight = height
    }
    setSliderAlignment(top:number) {
        this.sliderAlignmentTop = top
        this.sliderPosition = top
    }
    setSliderPosition(scroll:number) {
        this.sliderPosition = scroll
    }
    setLoaded(loaded:boolean) {
        this.loaded = loaded
    }
    //get user data
}
