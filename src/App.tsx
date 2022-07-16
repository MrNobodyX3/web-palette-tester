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

type Field = {
  displayName: string;
  name: string;
  defaultValue: string;
  fieldType?: string;
};

const FIELDS: Field[] = [
  {
    displayName: "Palette Title",
    name: "palette_title",
    defaultValue: "Palette Title",
    fieldType: "text",
  },
  {
    displayName: "Header Color",
    name: "header",
    defaultValue: "#4a5c73",
  },
  {
    displayName: "Logo Color",
    name: "logo",
    defaultValue: "#ffffff",
  },
  {
    displayName: "Header Text",
    name: "header_text",
    defaultValue: "#ffffff",
  },
  {
    displayName: "Panel Color",
    name: "panel",
    defaultValue: "#2a3441",
  },
  {
    displayName: "Panel Options BG",
    name: "panel_options_bg",
    defaultValue: "#2a3441",
  },
  {
    displayName: "Panel Options Text",
    name: "panel_options_text",
    defaultValue: "#ffffff",
  },
  {
    displayName: "Body Color",
    name: "body",
    defaultValue: "#121521",
  },
  {
    displayName: "Alert Good",
    name: "alert_good",
    defaultValue: "#4CAF50",
  },
  {
    displayName: "Alert Good Text",
    name: "alert_good_text",
    defaultValue: "#1C1F10",
  },
  {
    displayName: "Alert Bad",
    name: "alert_bad",
    defaultValue: "#F44336",
  },
  {
    displayName: "Alert Bad Text",
    name: "alert_bad_text",
    defaultValue: "#1C1F10",
  },
  {
    displayName: "Alert Warning",
    name: "alert_warning",
    defaultValue: "#FF9800",
  },
  {
    displayName: "Alert Warning Text",
    name: "alert_warning_text",
    defaultValue: "#1C1F10",
  },
  {
    displayName: "Card Background",
    name: "card_bg",
    defaultValue: "#1F2D3D",
  },
  {
    displayName: "Card Title",
    name: "card_title",
    defaultValue: "#ffffff",
  },
  {
    displayName: "Card Text",
    name: "card_text",
    defaultValue: "#ffffff",
  },
  {
    displayName: "Hyperlink",
    name: "hyperlink",
    defaultValue: "#00bcd4",
  },
  {
    displayName: "Active Button",
    name: "active_button",
    defaultValue: "#1515ff",
  },
  {
    displayName: "Active Text",
    name: "active_text",
    defaultValue: "#ffffff",
  },
  {
    displayName: "Disabled Button",
    name: "disabled_button",
    defaultValue: "#aaaaff",
  },
  {
    displayName: "Disabled Text",
    name: "disabled_text",
    defaultValue: "#151515",
  },
];

function App() {
  const [palette, setPalette] = useState(() =>
    FIELDS.reduce((acc, field) => {
      acc[field.name] = field.defaultValue;
      return acc;
    }, {} as { [key: string]: string })
  );

  const [gridToggle, setGridToggle] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <div className="pallet">
          <button
            className="grid-toggle"
            onClick={() => setGridToggle(!gridToggle)}
          >
            {gridToggle ? "Show Grid" : "Hide Grid"}
          </button>
          <h3>Pallet Editor</h3>
          <button
            className="copy-paste"
            onClick={() => {
              navigator.clipboard.writeText(JSON.stringify(palette));
            }}
          >
            Copy Pallet
          </button>
          <button
            className="copy-paste"
            onClick={() => {
              navigator.clipboard.readText().then((text) => {
                setPalette(JSON.parse(text));
              });
            }}
          >
            Paste Pallet
          </button>
          {FIELDS.map((field) => (
            <div className="color-field">
              {field.displayName}
              <input
                className="color-picker"
                type={field.fieldType || "color"}
                value={palette[field.name]}
                onChange={(e) => {
                  setPalette({
                    ...palette,
                    [field.name]: e.target.value,
                  });
                }}
              />
            </div>
          ))}
        </div>
        {gridToggle ? (
          <div className="Main-body">
            <div
              className="header"
              style={{ backgroundColor: palette["header"] }}
            >
              <div className="header-logo" style={{ color: palette["logo"] }}>
                Logo
              </div>
              {Array.from(Array(4).keys()).map((i) => (
                <div className="menu" style={{ color: palette["header_text"] }}>
                  Menu {1 + i}
                </div>
              ))}
              <div
                className="pallet-title"
                style={{ color: palette["header_text"] }}
              >
                {palette["palette_title"]}
              </div>
            </div>
            <div
              className="panel"
              style={{ backgroundColor: palette["panel"] }}
            >
              {Array.from(Array(4).keys()).map((i) => (
                <div
                  className="option"
                  style={{
                    backgroundColor: palette["panel_options_bg"],
                    color: palette["panel_options_text"],
                  }}
                >
                  Option {1 + i}
                </div>
              ))}
            </div>
            <div className="body" style={{ backgroundColor: palette["body"] }}>
              <div
                className="notice"
                style={{
                  color:
                    hexToHsv(palette["body"]) > 150 ? "#000000" : "#ffffff",
                }}
              >
                Please note: This is not a layout design suggestion
              </div>
              <div
                className="alert"
                style={{
                  backgroundColor: palette["alert_good"],
                  color: palette["alert_good_text"],
                  border: `2px solid ${palette["alert_good_text"]}`,
                }}
              >
                ALERT: This is a good alert!
              </div>
              <div
                className="alert"
                style={{
                  backgroundColor: palette["alert_bad"],
                  color: palette["alert_bad_text"],
                  border: `2px solid ${palette["alert_bad_text"]}`,
                }}
              >
                ALERT: This is a bad alert!
              </div>
              <div
                className="alert"
                style={{
                  backgroundColor: palette["alert_warning"],
                  color: palette["alert_warning_text"],
                  border: `2px solid ${palette["alert_warning_text"]}`,
                }}
              >
                ALERT: This is a warning alert!
              </div>
              <div
                className="card"
                style={{ backgroundColor: palette["card_bg"] }}
              >
                <h2
                  className="card-title"
                  style={{ color: palette["card_title"] }}
                >
                  Card Title
                </h2>
                <div
                  className="card-text"
                  style={{ color: palette["card_text"] }}
                >
                  Lorem ipsum dolor sit amet, consectetur{" "}
                  <span
                    className="hyper-link"
                    style={{ color: palette["hyperlink"] }}
                  >
                    Hyper link
                  </span>{" "}
                  adipiscing elit. Pellentesque euismod, nisi vel consectetur
                  euismod, nisl nisl consectetur nisl, eget consectetur nisl
                  nisl eget nisl.
                </div>

                <div>
                  <button
                    className="button"
                    style={{
                      backgroundColor: palette["active_button"],
                      color: palette["active_text"],
                    }}
                  >
                    Active Button
                  </button>
                  <button
                    className="button"
                    style={{
                      backgroundColor: palette["disabled_button"],
                      color: palette["disabled_text"],
                    }}
                  >
                    Deactive Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid">
            {FIELDS.filter((x) => !x.fieldType || x.fieldType == "color").map(
              (field) => (
                <div
                  className="grid-square"
                  style={{
                    backgroundColor: palette[field.name],
                    color:
                      hexToHsv(palette[field.name]) > 150
                        ? "#000000"
                        : "#ffffff",
                  }}
                >
                  <div>{field.displayName}</div>
                  <div>{palette[field.name]}</div>
                </div>
              )
            )}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
