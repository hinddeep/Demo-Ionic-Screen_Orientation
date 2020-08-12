import { Component } from "@angular/core";
import { Plugins } from "@capacitor/core";
const { ScreenOrientation } = Plugins;

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  screen_orientation: string;
  screen_orientation_event: string;
  screen_orientation_lock: string;

  constructor() {
    this.screen_orientation = "";
    this.screen_orientation_event = "";
    this.screen_orientation_lock = "";
    this.subscribeToOrientationChanges();
  }

  async getOrientation() {
    let obj = await ScreenOrientation.getScreenOrientation();
    this.screen_orientation = obj.orientation;
  }

  async lockOrientation() {
    await ScreenOrientation.lockScreenOrientation({
      orientation: this.screen_orientation_lock,
    });
  }

  async UnlockOrientation() {
    await ScreenOrientation.unlockScreenOrientation({});
  }

  subscribeToOrientationChanges() {
    ScreenOrientation.addListener("orientation_changed", (data) => {
      console.log(data.orientation);
      this.screen_orientation_event = data.orientation;
    });
  }
}
