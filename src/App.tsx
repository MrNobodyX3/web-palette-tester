import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function hexToHsv(hex: any) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const v = Math.max(r, g, b);
  const s = v === 0 ? 0 : Math.round(((v - Math.min(r, g, b)) / v) * 100);
  const h = s >= 85 ? (g < 200 ? 0 : v) : v;

  return h;
}

function App() {
  const [palletTitle, setPalletTitle] = useState("Pallet Title");

  const [HeaderColor, setHeaderColor] = useState("#4A5C73");
  const [LogoColor, setLogoColor] = useState("#ffffff");
  const [HeaderTextColor, setHeaderTextColor] = useState("#ffffff");

  const [BodyColor, setBodyColor] = useState("#121521");
  const [CardColor, setCardColor] = useState("#1F2D3D");
  const [CardTitleColor, setCardTitleColor] = useState("#ffffff");
  const [CardTextColor, setCardTextColor] = useState("#ffffff");
  const [hyperlinkColor, setHyperlinkColor] = useState("#00bcd4");

  const [AlertGoodColor, setAlertGoodColor] = useState("#4CAF50");
  const [AlertGoodTextColor, setAlertTextColor] = useState("#1C1F10");
  const [AlertBadColor, setAlertBadColor] = useState("#F44336");
  const [AlertBadTextColor, setAlertBadTextColor] = useState("#141316");
  const [AlertWarningColor, setAlertWarningColor] = useState("#FF9800");
  const [AlertWarningTextColor, setAlertWarningTextColor] = useState("#1F1800");

  const [PanelColor, setPanelColor] = useState("#2A3441");
  const [OptionBackgroundColor, setOptionBackgroundColor] = useState("#2A3441");
  const [OptionTextColor, setOptionTextColor] = useState("#ffffff");

  const [ActiveButtonColor, setActiveButtonColor] = useState("#1515ff");
  const [ActiveButtonTextColor, setActiveButtonTextColor] = useState("#ffffff");
  const [DeactiveButtonColor, setDeactiveButtonColor] = useState("#aaaaff");
  const [DeactiveButtonTextColor, setDeactiveButtonTextColor] =
    useState("#151515");

  return (
    <div className="App">
      <header className="App-header">
        <div className="pallet">
          <h3>Pallet Editor</h3>
          {/* button to copy all varibles */}
          <button
            className="copy-paste"
            onClick={() => {
              navigator.clipboard.writeText(
                `
Pallet Title: ${palletTitle}
Header Color: ${HeaderColor}
Logo Color: ${LogoColor}
Header Text Color: ${HeaderTextColor}
Body Color: ${BodyColor}
Card Color: ${CardColor}
Card Title Color: ${CardTitleColor}
Card Text Color: ${CardTextColor}
Hyperlink Color: ${hyperlinkColor}
Alert Good Color: ${AlertGoodColor}
Alert Good Text Color: ${AlertGoodTextColor}
Alert Bad Color: ${AlertBadColor}
Alert Bad Text Color: ${AlertBadTextColor}
Alert Warning Color: ${AlertWarningColor}
Alert Warning Text Color: ${AlertWarningTextColor}
Panel Color: ${PanelColor}
Option Background Color: ${OptionBackgroundColor}
Option Text Color: ${OptionTextColor}
Active Button Color: ${ActiveButtonColor}
Active Button Text Color: ${ActiveButtonTextColor}
Deactive Button Color: ${DeactiveButtonColor}
Deactive Button Text Color: ${DeactiveButtonTextColor}`
              );
            }}
          >
            Copy Pallet
          </button>
          {/* button to paste all varibles */}
          <button
            className="copy-paste"
            onClick={() => {
              navigator.clipboard.readText().then((text) => {
                const lines = text.split("\n");
                lines.forEach((line) => {
                  const [key, value] = line.split(":");
                  switch (key) {
                    case "Pallet Title":
                      setPalletTitle(value);
                      break;
                    case "Header Color":
                      setHeaderColor(value);
                      break;
                    case "Logo Color":
                      setLogoColor(value);
                      break;
                    case "Header Text Color":
                      setHeaderTextColor(value);
                      break;
                    case "Body Color":
                      setBodyColor(value);
                      break;
                    case "Card Color":
                      setCardColor(value);
                      break;
                    case "Card Title Color":
                      setCardTitleColor(value);
                      break;
                    case "Card Text Color":
                      setCardTextColor(value);
                      break;
                    case "Hyperlink Color":
                      setHyperlinkColor(value);
                      break;
                    case "Alert Good Color":
                      setAlertGoodColor(value);
                      break;
                    case "Alert Good Text Color":
                      setAlertBadTextColor(value);
                      break;
                    case "Alert Bad Color":
                      setAlertBadColor(value);
                      break;
                    case "Alert Bad Text Color":
                      setAlertBadTextColor(value);
                      break;
                    case "Alert Warning Color":
                      setAlertWarningColor(value);
                      break;
                    case "Alert Warning Text Color":
                      setAlertWarningTextColor(value);
                      break;
                    case "Panel Color":
                      setPanelColor(value);
                      break;
                    case "Option Background Color":
                      setOptionBackgroundColor(value);
                      break;
                    case "Option Text Color":
                      setOptionTextColor(value);
                      break;
                    case "Active Button Color":
                      setActiveButtonColor(value);
                      break;
                    case "Active Button Text Color":
                      setActiveButtonTextColor(value);
                      break;
                    case "Deactive Button Color":
                      setDeactiveButtonColor(value);
                      break;
                    case "Deactive Button Text Color":
                      setDeactiveButtonTextColor(value);
                      break;
                    default:
                      break;
                  }
                });
              });
            }}
          >
            Paste Pallet
          </button>
          <h5>
            Pallet Title
            <input
              className="color-picker"
              type="text"
              value={palletTitle}
              onChange={(e) => setPalletTitle(e.target.value)}
            />
          </h5>
          <h5 className="values">
            Logo{" "}
            <input
              className="color-picker"
              type="color"
              value={LogoColor}
              onChange={(e) => setLogoColor(e.target.value)}
            />
          </h5>
          <h5 className="values">
            Header{" "}
            <input
              className="color-picker"
              type="color"
              value={HeaderColor}
              onChange={(e) => setHeaderColor(e.target.value)}
            />
          </h5>
          <h5 className="values">
            Header Text{" "}
            <input
              className="color-picker"
              type="color"
              value={HeaderTextColor}
              onChange={(e) => setHeaderTextColor(e.target.value)}
            />
          </h5>
          <h5 className="values">
            Panel{" "}
            <input
              className="color-picker"
              type="color"
              value={PanelColor}
              onChange={(e) => setPanelColor(e.target.value)}
            />
          </h5>
          <h5 className="values">
            Option BG{" "}
            <input
              className="color-picker"
              type="color"
              value={OptionBackgroundColor}
              onChange={(e) => setOptionBackgroundColor(e.target.value)}
            />
          </h5>
          <h5 className="values">
            Option Text{" "}
            <input
              className="color-picker"
              type="color"
              value={OptionTextColor}
              onChange={(e) => setOptionTextColor(e.target.value)}
            />
          </h5>
          <h5 className="values">
            Body{" "}
            <input
              className="color-picker"
              type="color"
              value={BodyColor}
              onChange={(e) => setBodyColor(e.target.value)}
            />
          </h5>
          <h5 className="values">
            Alert Good{" "}
            <input
              className="color-picker"
              type="color"
              value={AlertGoodColor}
              onChange={(e) => setAlertGoodColor(e.target.value)}
            />
          </h5>
          <h5 className="values">
            Good Text{" "}
            <input
              className="color-picker"
              type="color"
              value={AlertGoodTextColor}
              onChange={(e) => setAlertTextColor(e.target.value)}
            />
          </h5>
          <h5 className="values">
            Alert Bad{" "}
            <input
              className="color-picker"
              type="color"
              value={AlertBadColor}
              onChange={(e) => setAlertBadColor(e.target.value)}
            />
          </h5>
          <h5 className="values">
            Bad Text{" "}
            <input
              className="color-picker"
              type="color"
              value={AlertBadTextColor}
              onChange={(e) => setAlertBadTextColor(e.target.value)}
            />
          </h5>
          <h5 className="values">
            Alert Warning{" "}
            <input
              className="color-picker"
              type="color"
              value={AlertWarningColor}
              onChange={(e) => setAlertWarningColor(e.target.value)}
            />
          </h5>
          <h5 className="values">
            Warning Text{" "}
            <input
              className="color-picker"
              type="color"
              value={AlertWarningTextColor}
              onChange={(e) => setAlertWarningTextColor(e.target.value)}
            />
          </h5>
          <h5 className="values">
            Card{" "}
            <input
              className="color-picker"
              type="color"
              value={CardColor}
              onChange={(e) => setCardColor(e.target.value)}
            />
          </h5>
          <h5 className="values">
            Card Title{" "}
            <input
              className="color-picker"
              type="color"
              value={CardTitleColor}
              onChange={(e) => setCardTitleColor(e.target.value)}
            />
          </h5>
          <h5 className="values">
            Card Text{" "}
            <input
              className="color-picker"
              type="color"
              value={CardTextColor}
              onChange={(e) => setCardTextColor(e.target.value)}
            />
          </h5>
          <h5 className="values">
            Hyperlink{" "}
            <input
              className="color-picker"
              type="color"
              value={hyperlinkColor}
              onChange={(e) => setHyperlinkColor(e.target.value)}
            />
          </h5>
          <h5 className="values">
            Active Button{" "}
            <input
              className="color-picker"
              type="color"
              value={ActiveButtonColor}
              onChange={(e) => setActiveButtonColor(e.target.value)}
            />
          </h5>
          <h5 className="values">
            Active Text{" "}
            <input
              className="color-picker"
              type="color"
              value={ActiveButtonTextColor}
              onChange={(e) => setActiveButtonTextColor(e.target.value)}
            />
          </h5>
          <h5 className="values">
            Deactive Button{" "}
            <input
              className="color-picker"
              type="color"
              value={DeactiveButtonColor}
              onChange={(e) => setDeactiveButtonColor(e.target.value)}
            />
          </h5>
          <h5 className="values">
            Deactive Text{" "}
            <input
              className="color-picker"
              type="color"
              value={DeactiveButtonTextColor}
              onChange={(e) => setDeactiveButtonTextColor(e.target.value)}
            />
          </h5>
        </div>
        <div className="Main-body">
          <div className="header" style={{ backgroundColor: HeaderColor }}>
            <div className="header-logo" style={{ color: LogoColor }}>
              Logo
            </div>
            {Array.from(Array(4).keys()).map((i) => (
              <div className="menu" style={{ color: HeaderTextColor }}>
                Menu {1 + i}
              </div>
            ))}
            <div className="pallet-title" style={{ color: HeaderTextColor }}>
              {palletTitle}
            </div>
          </div>
          <div className="panel" style={{ backgroundColor: PanelColor }}>
            {Array.from(Array(4).keys()).map((i) => (
              <div
                className="option"
                style={{
                  backgroundColor: OptionBackgroundColor,
                  color: OptionTextColor,
                }}
              >
                Option {1 + i}
              </div>
            ))}
          </div>
          <div className="body" style={{ backgroundColor: BodyColor }}>
            <div
              className="notice"
              style={{
                color: hexToHsv(BodyColor) > 150 ? "#000000" : "#ffffff",
              }}
            >
              Please note: This is not a layout design suggestion
            </div>
            <div
              className="alert"
              style={{
                backgroundColor: AlertGoodColor,
                color: AlertGoodTextColor,
                border: `2px solid ${AlertGoodTextColor}`,
              }}
            >
              ALERT: This is a good alert!
            </div>
            <div
              className="alert"
              style={{
                backgroundColor: AlertBadColor,
                color: AlertBadTextColor,
                border: `2px solid ${AlertBadTextColor}`,
              }}
            >
              ALERT: This is a bad alert!
            </div>
            <div
              className="alert"
              style={{
                backgroundColor: AlertWarningColor,
                color: AlertWarningTextColor,
                border: `2px solid ${AlertWarningTextColor}`,
              }}
            >
              ALERT: This is a warning alert!
            </div>
            <div className="card" style={{ backgroundColor: CardColor }}>
              <h2 className="card-title" style={{ color: CardTitleColor }}>
                Card Title
              </h2>
              <div className="card-text" style={{ color: CardTextColor }}>
                Lorem ipsum dolor sit amet, consectetur{" "}
                <span className="hyper-link" style={{ color: hyperlinkColor }}>
                  Hyper link
                </span>{" "}
                adipiscing elit. Pellentesque euismod, nisi vel consectetur
                euismod, nisl nisl consectetur nisl, eget consectetur nisl nisl
                eget nisl.
              </div>

              <div>
                <button
                  className="button"
                  style={{
                    backgroundColor: ActiveButtonColor,
                    color: ActiveButtonTextColor,
                  }}
                >
                  Active Button
                </button>
                <button
                  className="button"
                  style={{
                    backgroundColor: DeactiveButtonColor,
                    color: DeactiveButtonTextColor,
                  }}
                >
                  Deactive Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
