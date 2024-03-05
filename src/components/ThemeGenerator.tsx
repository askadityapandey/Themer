import download from 'downloadjs';
import React, { useState } from 'react';
import Colin from './Colin';

interface Theme {
  name: string;
  type: string;
  colors: {
    [key: string]: string;
  };
  tokenColors: {
    scope: string[];
    settings: {
      [key: string]: string;
    };
  }[];
}

const ThemeGenerator = () => {
  const [theme, setTheme] = useState<Theme>({
    name: '',
    type: "custom",
    colors: {},
    tokenColors: [],
  });

  const handleColorChange = (property: string, color: string) => {
    setTheme(prevTheme => ({
      ...prevTheme,
      colors: {
        ...prevTheme.colors,
        [property]: color,
      },
    }));
  };

  const handleNameChange = (name: string) => {
    setTheme(prevTheme => ({
      ...prevTheme,
      name: name,
    }));
  };
  
  

  const handleDownload = () => {
    const themeJSONString = JSON.stringify(theme, null, 2);
    download(themeJSONString, 'your-theme-name.json', 'application/json');
  };

  return (
    <div className="download-btn-container">
      <Colin handleColorChange={handleColorChange} handleNameChange={handleNameChange} />
      <button onClick={handleDownload}>Download Theme</button>
      <div>
        {/* Display the generated theme JSON */}
        <h2>Generated Theme JSON:</h2>
        <pre>{JSON.stringify(theme, null, 2)}</pre>
      </div>
    </div>
  );
}

export default ThemeGenerator;
