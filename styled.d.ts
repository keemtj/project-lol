// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    font: {
      size: {
        r: string;
        s: string;
        m: string;
        l: string;
        xl: string;
        title: string;
      };
      weight: {
        normal: number;
        bold: number;
      };
    };
    radius: {
      s: string;
      m: string;
      l: string;
    };
    color: {
      bgColor: string;
      text: string;
      border: string;
      selectBgColor: string;
      selectBorder: string;
      dropDownBgColor: string;
      dropDownActive: string;
      chart: string;
      chartBorder: string;
      skeleton: string;
    };
  }
}
