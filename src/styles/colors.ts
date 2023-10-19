export const bgColor = {
    green: "#12b981",
    blue: "#00BAFF",
    red: "#FF2519",
    orange: "#f7b759"
}

export const linearGradients = {
    greenLinearGradient: 'linear-gradient(45deg, #4A8F6D,  #65C294)',
    redLinearGradient: 'linear-gradient(45deg, #B30900, #FF2519)',
    blueLinearGradient: 'linear-gradient(45deg, #008FC4, #00BAFF)',
  };





interface Styles {
    fontSize: {
      text: string;
      title: string;
      button: string;
      listItem: string;
    };
    fontVariant: {
        light: number;
      regular: number;
      medium: number;
      bold: number;
    };
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      accent: string;
    };
    margin: {
      small: string;
      medium: string;
      large: string;
    };
    padding: {
      small: string;
      medium: string;
      large: string;
    };
}

  const appStyles: Styles = {
    // Font sizes in rem units
    fontSize: {
      text: "1rem",
      title: "2rem",
      button: ".8rem",
      listItem: ".9rem",
    },
    
    // Font variants in numbers (refers to font-weight)
    fontVariant: {
        light: 300,
      regular: 400,  // Normal text
      medium: 500,   // Medium weight, a bit bolder than regular
      bold: 700,     // Bold text
    },
    
    // Color palette
    colors: {
      primary: "#3498db",
      secondary: "#2ecc71",
      background: "#FFFFFF",
      text: "#333",
      accent: "#e74c3c",
    },
  
    // Margins in rem units
    margin: {
      small: "0.5rem",
      medium: "1rem",
      large: "1.5rem",
    },
    
    // Paddings in rem units
    padding: {
      small: "0.5rem",
      medium: "1rem",
      large: "1.5rem",
    },
  };
  
  export default appStyles;
  