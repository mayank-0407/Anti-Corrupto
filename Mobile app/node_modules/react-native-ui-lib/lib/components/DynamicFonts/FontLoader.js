import { NativeModules } from 'react-native';
const {
  DynamicFont
} = NativeModules;
export default class FontLoader {
  loadedFonts = new Map();
  constructor(props) {
    this.props = props;
  }
  log(message, ...optionalParams) {
    const {
      debug
    } = this.props;
    if (debug) {
      console.log(message, optionalParams);
    }
  }
  loadFont = ({
    fontName,
    base64FontString,
    fontExtension = 'ttf',
    forceLoad = false
  }) => {
    /* Check if this font was already loaded */
    if (!forceLoad && this.loadedFonts.has(fontName)) {
      this.log(fontName, 'Already loaded');
      return Promise.resolve(this.loadedFonts.get(fontName));
    }
    if (!fontName) {
      throw new Error('fontName is a required argument');
    }
    if (!base64FontString) {
      throw new Error('base64FontString is a required argument');
    }
    this.log(fontName, 'Starting to load');
    /* Load font via native binary code */
    return new Promise((resolve, reject) => {
      DynamicFont.loadFont({
        name: fontName,
        data: base64FontString,
        type: fontExtension
      }, (err, givenName) => {
        if (err) {
          reject(err);
          return;
        }
        /* Loaded successfully... resolve promise with "real" font name */
        this.loadedFonts.set(fontName, givenName);
        resolve(givenName);
      });
    });
  };

  // TODO: Needs to be tested
  // public loadFontFromFile = (fontName: string, filePath: string) => {
  //   if (!fontName) {
  //     throw new Error('name is a required argument');
  //   }

  //   if (!filePath) {
  //     throw new Error('filePath is a required argument');
  //   }

  //   return new Promise((resolve, reject) => {
  //     DynamicFont.loadFontFromFile({
  //       name: fontName,
  //       filePath
  //     },
  //     (err: string, givenName: string) => {
  //       if (err) {
  //         reject(err);
  //         return;
  //       }
  //       resolve(givenName);
  //     });
  //   });
  // };

  loadFonts = (fonts, forceLoad) => {
    if (!fonts) {
      return Promise.resolve([]);
    }
    const fontsArray = fonts instanceof Array ? fonts : [fonts];
    return Promise.all(fontsArray.filter(font => font).map(font => this.loadFont({
      forceLoad,
      ...font
    })));
  };
}