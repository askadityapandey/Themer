const Colin: React.FC<ColinProps> = ({ handleColorChange, setTheme, handleNameChange }) => {
  const handleChange = (property: string, value: string) => {
    handleColorChange(property, value);

    // Update the theme in the ThemeGenerator component
    setTheme((prevTheme: { colors: any; }) => ({
      ...prevTheme,
      colors: {
        ...prevTheme.colors,
        [property]: value,
      },
    }));
  };





  return (
    <div className='colin'>
      <div className='colin-1'>
        <h2>Theme Name</h2>
        <input onChange={(e) => handleNameChange(e.target.value)} />
        
        <h2>Background Color</h2>
        <input onChange={(e) => handleChange('background', e.target.value)} />
      </div>
      <div className='colin-1'>
        <h2>Foreground Color</h2>
        <input onChange={(e) => handleChange('foreground', e.target.value)} />
        <h2>Accent Colors</h2>
        <input onChange={(e) => handleChange('accent', e.target.value)} />
      </div>
      <div className='colin-1'>
        <h2>Status Bar Colors</h2>
        <input onChange={(e) => handleChange('statusBar', e.target.value)} />
        <h2>Minimap</h2>
        <input onChange={(e) => handleChange('minimap', e.target.value)} />
      </div>
    </div>
  );
};

export default Colin;