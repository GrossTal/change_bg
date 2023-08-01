import './Bg.css';

function Bg() {
  return (
    <div className="Bg">
      <div className="header">
        <span className="header_text">העלאת תמונה כדי להסתיר את הרקע</span>
        </div>
        <button className="header_bt">העלאת תמונה</button>
        <span className="header_st">פורמטים נתמכים png, jpeg </span>
        <div className = "main_div">
            <div className="left">LEFT</div>
            <div className="Right">
                <div className ="middle_right_div">
                <div className= "div_top">
                  <div className = "top_div_top_text">תמונה חינם</div>  
                  <div className = "top_div_bottom_text">תמונה מקדימה של התמונה 418x512</div> 
                  <button className = "dw_b">הורד</button>
                  <div className="right_div_top_sub_sub">איכות טובה עד 0.25 מגה פיקסל</div>
                </div>
                <div className= "div_bottom"></div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Bg;
