(async function () {
  async function f() {
    try {
      const v = document.querySelector(".SfrTV.TmWTp");
      if (v) {
        return;
      }
      const v2 = document.querySelector(".P6gJl");
      if (!v2) {
        return;
      }
      v2.click();
      await new Promise(p => setTimeout(p, 30));
      const v3 = document.querySelector("a[href=\"/en/demo-trade\"]");
      if (!v3) {
        return;
      }
      v3.click();
      await new Promise(p2 => setTimeout(p2, 50));
      const v4 = document.querySelector(".modal-account-type-changed__body-button, .modal__close");
      if (v4) {
        v4.click();
      }
    } catch (e) {}
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      setTimeout(f, 200);
    });
  } else {
    setTimeout(f, 200);
  }
  if (typeof Swal === "undefined") {
    await new Promise((p3, p4) => {
      const v5 = document.createElement("script");
      v5.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
      v5.onload = p3;
      v5.onerror = p4;
      document.head.appendChild(v5);
    });
  }
  const vLSHttpstraderjisanxpyt = "https://traderjisanx.pythonanywhere.com/api/verify";
  const vLSHttpstraderjisanxpyt2 = "https://traderjisanx.pythonanywhere.com/api/get-script";
  const vLSQuotex = "Quotex";
  const vLSOblivionCometNebulaS = "Oblivion Comet Nebula Specter Comet Nimbus Quartz Inferno Quotex Blitz Drift";
  let v6 = false;
  let v7 = null;
  let v8 = parseFloat(localStorage.getItem("demoBalance")) || 12500;
  const vA = [128, 135, 111];
  async function f2() {
    try {
      const v9 = document.createElement("canvas");
      const v10 = v9.getContext("2d");
      v9.width = 200;
      v9.height = 50;
      v10.textBaseline = "top";
      v10.font = "14px 'Arial'";
      v10.textBaseline = "alphabetic";
      v10.fillStyle = "#f60";
      v10.fillRect(125, 1, 62, 20);
      v10.fillStyle = "#069";
      v10.fillText("Quotex FP 2026", 2, 15);
      v10.fillStyle = "rgba(102, 204, 0, 0.7)";
      v10.fillText("Quotex FP 2026", 4, 17);
      const v11 = v9.toDataURL();
      let vLN0 = 0;
      for (let vLN02 = 0; vLN02 < v11.length; vLN02++) {
        const v12 = v11.charCodeAt(vLN02);
        vLN0 = (vLN0 << 5) - vLN0 + v12;
        vLN0 = vLN0 & vLN0;
      }
      return Math.abs(vLN0).toString(16);
    } catch (e2) {
      return "canvas_error";
    }
  }
  const vA2 = [107, 137, 88];
  async function f3() {
    try {
      const v13 = document.createElement("canvas");
      const v14 = v13.getContext("webgl") || v13.getContext("experimental-webgl");
      if (!v14) {
        return "webgl_not_supported";
      }
      const v15 = v14.getExtension("WEBGL_debug_renderer_info");
      const v16 = v15 ? v14.getParameter(v15.UNMASKED_VENDOR_WEBGL) : "Unknown";
      const v17 = v15 ? v14.getParameter(v15.UNMASKED_RENDERER_WEBGL) : "Unknown";
      const v18 = v16 + "|" + v17;
      let vLN03 = 0;
      for (let vLN04 = 0; vLN04 < v18.length; vLN04++) {
        const v19 = v18.charCodeAt(vLN04);
        vLN03 = (vLN03 << 5) - vLN03 + v19;
        vLN03 = vLN03 & vLN03;
      }
      return Math.abs(vLN03).toString(16);
    } catch (e3) {
      return "webgl_error";
    }
  }
  const vA3 = [159, 128, 173];
  async function f4() {
    const v20 = navigator.userAgent;
    let vLSUnknown = "Unknown";
    let vLSUnknown2 = "Unknown";
    let vLSUnknown3 = "Unknown";
    if (v20.includes("Firefox")) {
      vLSUnknown2 = "Firefox";
    } else if (v20.includes("SamsungBrowser")) {
      vLSUnknown2 = "Samsung Browser";
    } else if (v20.includes("Opera") || v20.includes("OPR/")) {
      vLSUnknown2 = "Opera";
    } else if (v20.includes("Trident")) {
      vLSUnknown2 = "Internet Explorer";
    } else if (v20.includes("Edge")) {
      vLSUnknown2 = "Edge";
    } else if (v20.includes("Chrome")) {
      vLSUnknown2 = "Chrome";
    } else if (v20.includes("Safari")) {
      vLSUnknown2 = "Safari";
    }
    if (v20.includes("Android")) {
      vLSUnknown3 = "Android";
    } else if (v20.includes("Linux")) {
      vLSUnknown3 = "Linux";
    } else if (v20.includes("iPhone") || v20.includes("iPad") || v20.includes("iPod")) {
      vLSUnknown3 = "iOS";
    } else if (v20.includes("Macintosh")) {
      vLSUnknown3 = "Mac OS";
    } else if (v20.includes("Windows")) {
      vLSUnknown3 = "Windows";
    }
    if (v20.includes("Mobile")) {
      vLSUnknown = "Mobile";
    } else if (v20.includes("Tablet")) {
      vLSUnknown = "Tablet";
    } else {
      vLSUnknown = "Desktop";
    }
    const v21 = window.screen.width + "x" + window.screen.height;
    const v22 = await f2();
    const v23 = await f3();
    const v24 = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const v25 = navigator.language || navigator.userLanguage || "Unknown";
    const v26 = screen.colorDepth || 24;
    const v27 = window.devicePixelRatio || 1;
    const v28 = navigator.platform || "Unknown";
    const v29 = navigator.hardwareConcurrency || "Unknown";
    const v30 = navigator.deviceMemory || "Unknown";
    return {
      screenResolution: v21,
      canvasFingerprint: v22,
      webglFingerprint: v23,
      timezone: v24,
      language: v25,
      colorDepth: v26,
      pixelRatio: v27,
      platform: v28,
      browser: vLSUnknown2,
      os: vLSUnknown3,
      deviceType: vLSUnknown,
      userAgent: v20,
      cpuCores: v29,
      deviceMemory: v30,
      plugins: Array.from(navigator.plugins || []).map(p5 => p5.name).join(", ") || "None"
    };
  }
  const vA4 = [105, 136, 114];
  async function f5(p6) {
    const vCorrectPassword = "SokAlike007";
    if (p6 === vCorrectPassword) {
      localStorage.setItem("appActivation", p6);
      localStorage.setItem("lastVerified", Date.now());
      v6 = true;
      return {
        valid: true,
        key: p6
      };
    } else {
      return {
        valid: false,
        reason: "invalid"
      };
    }
  }
  async function f6() {
    const v36 = localStorage.getItem("appActivation");
    if (v36) {
      const v37 = await f5(v36);
      if (v37.valid) {
        v6 = true;
        return v37;
      }
      if (v37.reason === "banned") {
        localStorage.removeItem("appActivation");
        localStorage.removeItem("lastVerified");
        v6 = false;
        return v37;
      }
      if (v37.reason === "wrong_project") {
        localStorage.removeItem("appActivation");
        localStorage.removeItem("lastVerified");
        v6 = false;
        return v37;
      }
      if (v37.reason === "limit") {
        localStorage.removeItem("appActivation");
        localStorage.removeItem("lastVerified");
        v6 = false;
        return v37;
      }
      if (v37.keepLicense || v37.reason === "network" || v37.offline) {
        v6 = true;
        return {
          ...v37,
          offline: true
        };
      }
      v6 = true;
      return {
        ...v37,
        offline: true
      };
    }
    v6 = false;
    return {
      valid: false
    };
  }
  const vA5 = [164, 145, 187];
  function f7(p7, p8) {
    Swal.fire({
      title: "",
      html: "\n        <div style=\"font-family: 'Roboto', sans-serif;\n                    text-align: center;\n                    background: linear-gradient(135deg, rgba(30, 11, 54, 0.98), rgba(45, 20, 70, 0.98));\n                    padding: 20px;\n                    border-radius: 15px;\n                    box-shadow: 0 15px 40px rgba(0,0,0,0.5);\">\n          \n          <div style=\"background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);\n                      padding: 2px;\n                      border-radius: 12px;\n                      margin-bottom: 15px;\">\n            <div style=\"background: rgba(30, 11, 54, 0.95);\n                        padding: 15px;\n                        border-radius: 10px;\">\n              <div style=\"display: flex; align-items: center; justify-content: center; margin-bottom: 8px;\">\n                <div style=\"width: 50px; height: 50px;\n                            background: linear-gradient(135deg, #ff6b6b, #ee5a6f);\n                            border-radius: 50%;\n                            display: flex;\n                            align-items: center;\n                            justify-content: center;\n                            box-shadow: 0 0 20px rgba(255, 107, 107, 0.5);\">\n                  <svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"white\">\n                    <path d=\"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z\"/>\n                  </svg>\n                </div>\n              </div>\n              <h2 style=\"color: #fff; margin: 0; font-size: 16px; font-weight: 700;\n                         background: linear-gradient(to right, #ff6b6b, #ee5a6f);\n                         -webkit-background-clip: text;\n                         -webkit-text-fill-color: transparent;\">\n                Device Limit Reached\n              </h2>\n            </div>\n          </div>\n          \n          <div style=\"background: rgba(255, 107, 107, 0.15);\n                      padding: 15px;\n                      margin: 15px 0;\n                      border-radius: 10px;\n                      text-align: left;\n                      backdrop-filter: blur(10px);\">\n            <p style=\"margin: 0; font-size: 15px; color: #fff; line-height: 1.5; font-weight: 700;\">\n              <strong style=\"color: #ff6b6b;\">Maximum Devices Used!</strong>\n            </p>\n            <p style=\"margin: 10px 0; font-size: 13px; color: rgba(255,255,255,0.9); line-height: 1.5;\">\n              Your license has reached the maximum device limit.\n            </p>\n            <div style=\"background: rgba(255, 107, 107, 0.2);\n                        padding: 12px;\n                        border-radius: 8px;\n                        margin: 12px 0;\">\n              <p style=\"margin: 0; font-size: 14px; color: #fff; font-weight: 700;\">\n                Used: <span style=\"color: #ff6b6b;\">" + p8 + "</span> / <span style=\"color: #ee5a6f;\">" + p7 + "</span> Devices\n              </p>\n            </div>\n            <p style=\"margin: 8px 0 0 0; font-size: 13px; color: rgba(255,255,255,0.9); line-height: 1.5;\">\n              <strong style=\"color: #00d9ff;\">Solution:</strong> If you have shared your license with another person, please stop them from using it first. Sharing licenses is strictly prohibited - this license is for your personal use only. Once the other device is disconnected, you will be able to use it properly.\n            </p>\n          </div>\n          \n          <div style=\"background: rgba(249, 0, 255, 0.1);\n                      padding: 15px;\n                      border-radius: 10px;\n                      margin-bottom: 8px;\">\n            <div style=\"display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 8px;\">\n              <img src=\"https://i.postimg.cc/7Y7sBcfg/photo-2025-05-01-04-18-39.jpg\"\n                   style=\"width: 22px; height: 22px; border-radius: 50%; object-fit: cover;\"\n                   alt=\"Telegram\">\n              <p style=\"margin: 0; font-size: 15px; color: #fff; font-weight: 600;\">\n                Contact for Upgrade\n              </p>\n            </div>\n            <a href=\"https://t.me/traderjisanx\"\n               target=\"_blank\"\n               style=\"display: inline-block;\n                      color: #f900ff;\n                      font-weight: 700;\n                      text-decoration: none;\n                      font-size: 14px;\n                      padding: 10px 20px;\n                      background: rgba(249, 0, 255, 0.2);\n                      border-radius: 8px;\n                      transition: all 0.3s ease;\">\n              @traderjisanx\n            </a>\n          </div>\n        </div>\n      ",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Contact Developer",
      cancelButtonText: "Close",
      confirmButtonColor: "#ff6b6b",
      cancelButtonColor: "#ee5a6f",
      allowOutsideClick: false,
      customClass: {
        container: "swal-high-zindex",
        popup: "custom-popup-style",
        confirmButton: "custom-button-style",
        cancelButton: "custom-button-style"
      },
      didOpen: () => {
        const v38 = document.createElement("style");
        v38.textContent = "\n          .custom-popup-style {\n            border-radius: 20px !important;\n            padding: 0 !important;\n          }\n          .custom-button-style {\n            font-family: 'Roboto', sans-serif !important;\n            font-weight: 600 !important;\n            padding: 12px 30px !important;\n            border-radius: 10px !important;\n            font-size: 15px !important;\n            transition: all 0.3s ease !important;\n            box-shadow: 0 4px 15px rgba(0,0,0,0.2) !important;\n          }\n          .custom-button-style:hover {\n            transform: translateY(-2px) !important;\n            box-shadow: 0 6px 20px rgba(0,0,0,0.3) !important;\n          }\n        ";
        document.head.appendChild(v38);
      }
    }).then(p9 => {
      if (p9.isConfirmed) {
        window.open("https://t.me/traderjisanx", "_blank");
      }
    });
  }
  function f8(p10, p11) {
    let v39 = p11 || "UNKNOWN";
    Swal.fire({
      icon: "error",
      title: "🚫 Wrong Project License",
      html: "<div style=\"text-align: center; font-family: Arial, sans-serif;\">\n               <div style=\"background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); \n                           padding: 20px; \n                           border-radius: 12px; \n                           margin-bottom: 20px;\n                           box-shadow: 0 4px 15px rgba(0,0,0,0.2);\">\n                 <h2 style=\"color: #fff; margin: 0; font-size: 22px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);\">\n                   ⚠️ License Mismatch Detected\n                 </h2>\n               </div>\n               \n               <div style=\"background: #fff3cd; \n                           border-left: 5px solid #ffc107; \n                           padding: 15px; \n                           margin: 20px 0; \n                           border-radius: 8px;\n                           text-align: left;\">\n                 <p style=\"margin: 0; font-size: 15px; color: #856404;\">\n                   <strong>📌 Issue:</strong> This license token is not for <span style=\"color: #d32f2f; font-weight: bold; font-size: 17px;\">QUOTEX</span>\n                 </p>\n                 <p style=\"margin: 10px 0 0 0; font-size: 15px; color: #856404;\">\n                   <strong>🔑 This is for:</strong> <span style=\"color: #1976d2; font-weight: bold; font-size: 17px; text-transform: uppercase;\">" + v39 + "</span>\n                 </p>\n               </div>\n               \n               <div style=\"background: #e8f5e9; \n                           border-left: 5px solid #4caf50; \n                           padding: 15px; \n                           margin: 20px 0; \n                           border-radius: 8px;\n                           text-align: left;\">\n                 <p style=\"margin: 0; font-size: 15px; color: #2e7d32;\">\n                   <strong>✅ Solution:</strong> Please use a valid <span style=\"color: #d32f2f; font-weight: bold;\">QUOTEX</span> license key.\n                 </p>\n               </div>\n               \n               <div style=\"margin-top: 20px; padding: 15px; background: #f5f5f5; border-radius: 8px;\">\n                 <p style=\"margin: 0; font-size: 14px; color: #555;\">\n                   Need help? Contact: \n                   <a href=\"https://t.me/traderjisanx\" \n                      target=\"_blank\" \n                      style=\"color: #0088cc; \n                             font-weight: bold; \n                             text-decoration: none;\n                             font-size: 14px;\">\n                     📱 @traderjisanx\n                   </a>\n                 </p>\n               </div>\n             </div>",
      confirmButtonText: "✓ Understood",
      confirmButtonColor: "#667eea",
      allowOutsideClick: false,
      customClass: {
        container: "swal-high-zindex",
        popup: "animated-popup",
        confirmButton: "animated-button"
      }
    });
  }
  const vA6 = [118, 133, 131];
  function f9() {
    Swal.fire({
      title: "",
      html: "\n        <div style=\"font-family: 'Roboto', sans-serif; \n                    text-align: center;\n                    background: linear-gradient(135deg, rgba(30, 11, 54, 0.98), rgba(45, 20, 70, 0.98));\n                    padding: 20px;\n                    border-radius: 15px;\n                    box-shadow: 0 15px 40px rgba(0,0,0,0.5);\">\n          \n          <div style=\"background: linear-gradient(135deg, #f900ff 0%, #00d9ff 100%);\n                      padding: 2px;\n                      border-radius: 12px;\n                      margin-bottom: 15px;\">\n            <div style=\"background: rgba(30, 11, 54, 0.95);\n                        padding: 15px;\n                        border-radius: 10px;\">\n              <div style=\"display: flex; align-items: center; justify-content: center; margin-bottom: 8px;\">\n                <div style=\"width: 50px; height: 50px;\n                            background: linear-gradient(135deg, #f900ff, #00d9ff);\n                            border-radius: 50%;\n                            display: flex;\n                            align-items: center;\n                            justify-content: center;\n                            box-shadow: 0 0 20px rgba(249, 0, 255, 0.5);\">\n                  <svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"white\">\n                    <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z\"/>\n                  </svg>\n                </div>\n              </div>\n              <h2 style=\"color: #fff; margin: 0; font-size: 16px; font-weight: 700; \n                         background: linear-gradient(to right, #f900ff, #00d9ff);\n                         -webkit-background-clip: text;\n                         -webkit-text-fill-color: transparent;\n                         text-shadow: none;\">\n                Invalid License Key\n              </h2>\n            </div>\n          </div>\n          \n          <div style=\"background: rgba(255, 51, 102, 0.15);\n                      padding: 15px;\n                      margin: 15px 0;\n                      border-radius: 10px;\n                      text-align: left;\n                      backdrop-filter: blur(10px);\">\n            <p style=\"margin: 0; font-size: 15px; color: #fff; line-height: 1.5; font-weight: 700;\">\n              <strong style=\"color: #ff3366;\">Invalid License!</strong>\n            </p>\n            <p style=\"margin: 10px 0 0 0; font-size: 13px; color: rgba(255,255,255,0.9); line-height: 1.5;\">\n              You have not purchased a valid license yet. Without purchasing a license, you cannot use this service. Please buy an official license from the developer to get access.\n            </p>\n            <p style=\"margin: 10px 0 0 0; font-size: 14px; color: rgba(255,255,255,0.95); line-height: 1.5; font-weight: 600;\">\n              <strong style=\"color: #00d9ff;\">License Price:</strong> <span style=\"color: #f900ff;\">$30 USD</span>\n            </p>\n            <p style=\"margin: 8px 0 0 0; font-size: 12px; color: rgba(255,255,255,0.85); line-height: 1.5;\">\n              <strong style=\"color: #ff3366;\">Important:</strong> Purchase only from the official developer to avoid scams.\n            </p>\n          </div>\n          \n          <div style=\"background: rgba(249, 0, 255, 0.1);\n                      padding: 15px;\n                      border-radius: 10px;\n                      margin-bottom: 8px;\">\n            <div style=\"display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 8px;\">\n              <img src=\"https://i.postimg.cc/7Y7sBcfg/photo-2025-05-01-04-18-39.jpg\" \n                   style=\"width: 22px; height: 22px; border-radius: 50%; object-fit: cover;\" \n                   alt=\"Telegram\">\n              <p style=\"margin: 0; font-size: 15px; color: #fff; font-weight: 600;\">\n                Developer Contact\n              </p>\n            </div>\n            <a href=\"https://t.me/traderjisanx\" \n               target=\"_blank\" \n               style=\"display: inline-block;\n                      color: #f900ff;\n                      font-weight: 700;\n                      text-decoration: none;\n                      font-size: 14px;\n                      padding: 10px 20px;\n                      background: rgba(249, 0, 255, 0.2);\n                      border-radius: 8px;\n                      transition: all 0.3s ease;\">\n              @traderjisanx\n            </a>\n          </div>\n        </div>\n      ",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Contact Developer",
      cancelButtonText: "Try Again",
      confirmButtonColor: "#667eea",
      cancelButtonColor: "#764ba2",
      allowOutsideClick: false,
      customClass: {
        container: "swal-high-zindex",
        popup: "custom-popup-style",
        confirmButton: "custom-button-style",
        cancelButton: "custom-button-style"
      },
      didOpen: () => {
        const v40 = document.createElement("style");
        v40.textContent = "\n          .custom-popup-style {\n            border-radius: 20px !important;\n            padding: 0 !important;\n          }\n          .custom-button-style {\n            font-family: 'Roboto', sans-serif !important;\n            font-weight: 600 !important;\n            padding: 12px 30px !important;\n            border-radius: 10px !important;\n            font-size: 15px !important;\n            transition: all 0.3s ease !important;\n            box-shadow: 0 4px 15px rgba(0,0,0,0.2) !important;\n          }\n          .custom-button-style:hover {\n            transform: translateY(-2px) !important;\n            box-shadow: 0 6px 20px rgba(0,0,0,0.3) !important;\n          }\n        ";
        document.head.appendChild(v40);
      }
    }).then(p12 => {
      if (p12.isConfirmed) {
        window.open("https://t.me/traderjisanx", "_blank");
      }
    });
  }
  function f10() {
    Swal.fire({
      title: "",
      html: "\n        <div style=\"font-family: 'Roboto', sans-serif;\n                    text-align: center;\n                    background: linear-gradient(135deg, rgba(30, 11, 54, 0.98), rgba(45, 20, 70, 0.98));\n                    padding: 20px;\n                    border-radius: 15px;\n                    box-shadow: 0 15px 40px rgba(0,0,0,0.5);\">\n          \n          <div style=\"background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);\n                      padding: 2px;\n                      border-radius: 12px;\n                      margin-bottom: 15px;\">\n            <div style=\"background: rgba(30, 11, 54, 0.95);\n                        padding: 15px;\n                        border-radius: 10px;\">\n              <div style=\"display: flex; align-items: center; justify-content: center; margin-bottom: 8px;\">\n                <div style=\"width: 50px; height: 50px;\n                            background: linear-gradient(135deg, #ff6b6b, #ee5a6f);\n                            border-radius: 50%;\n                            display: flex;\n                            align-items: center;\n                            justify-content: center;\n                            box-shadow: 0 0 20px rgba(255, 107, 107, 0.5);\">\n                  <svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"white\">\n                    <path d=\"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z\"/>\n                  </svg>\n                </div>\n              </div>\n              <h2 style=\"color: #fff; margin: 0; font-size: 16px; font-weight: 700;\n                         background: linear-gradient(to right, #ff6b6b, #ee5a6f);\n                         -webkit-background-clip: text;\n                         -webkit-text-fill-color: transparent;\">\n                Connection Error\n              </h2>\n            </div>\n          </div>\n          \n          <div style=\"background: rgba(245, 87, 108, 0.15);\n                      padding: 15px;\n                      margin: 15px 0;\n                      border-radius: 10px;\n                      text-align: left;\n                      backdrop-filter: blur(10px);\">\n            <p style=\"margin: 0; font-size: 14px; color: #fff; line-height: 1.5; font-weight: 600;\">\n              <strong style=\"color: #f5576c;\">Network Issue:</strong> Could not verify license due to connection problems.\n            </p>\n            <p style=\"margin: 10px 0 0 0; font-size: 13px; color: rgba(255,255,255,0.9); line-height: 1.5;\">\n              <strong style=\"color: #ff6b6b;\">Try:</strong> Check your internet connection and try again. If the problem persists, contact support.\n            </p>\n          </div>\n          \n          <div style=\"background: rgba(249, 0, 255, 0.1);\n                      padding: 15px;\n                      border-radius: 10px;\n                      margin-bottom: 8px;\">\n            <div style=\"display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 8px;\">\n              <img src=\"https://i.postimg.cc/7Y7sBcfg/photo-2025-05-01-04-18-39.jpg\"\n                   style=\"width: 22px; height: 22px; border-radius: 50%; object-fit: cover;\"\n                   alt=\"Telegram\">\n              <p style=\"margin: 0; font-size: 15px; color: #fff; font-weight: 600;\">\n                Need Help?\n              </p>\n            </div>\n            <a href=\"https://t.me/traderjisanx\"\n               target=\"_blank\"\n               style=\"display: inline-block;\n                      color: #f900ff;\n                      font-weight: 700;\n                      text-decoration: none;\n                      font-size: 14px;\n                      padding: 10px 20px;\n                      background: rgba(249, 0, 255, 0.2);\n                      border-radius: 8px;\n                      transition: all 0.3s ease;\">\n              @traderjisanx\n            </a>\n          </div>\n        </div>\n      ",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "📞 Contact Support",
      cancelButtonText: "🔄 Try Again",
      confirmButtonColor: "#f093fb",
      cancelButtonColor: "#f5576c",
      allowOutsideClick: false,
      customClass: {
        container: "swal-high-zindex",
        popup: "custom-popup-style",
        confirmButton: "custom-button-style",
        cancelButton: "custom-button-style"
      },
      didOpen: () => {
        const v41 = document.createElement("style");
        v41.textContent = "\n          .custom-popup-style {\n            border-radius: 20px !important;\n            padding: 0 !important;\n          }\n          .custom-button-style {\n            font-family: 'Roboto', sans-serif !important;\n            font-weight: 600 !important;\n            padding: 12px 30px !important;\n            border-radius: 10px !important;\n            font-size: 15px !important;\n            transition: all 0.3s ease !important;\n            box-shadow: 0 4px 15px rgba(0,0,0,0.2) !important;\n          }\n          .custom-button-style:hover {\n            transform: translateY(-2px) !important;\n            box-shadow: 0 6px 20px rgba(0,0,0,0.3) !important;\n          }\n        ";
        document.head.appendChild(v41);
      }
    }).then(p13 => {
      if (p13.isConfirmed) {
        window.open("https://t.me/traderjisanx", "_blank");
      }
    });
  }
  const vA7 = [91, 95, 74];
  function f11() {
    return Swal.fire({
      icon: "success",
      title: "License Verified!",
      text: "Your license has been successfully verified.",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      customClass: {
        container: "swal-high-zindex"
      }
    });
  }
  function f12(p14) {
    const vO = {
      A: "Nebula",
      B: "Quartz",
      C: "Tornado",
      D: "Eclipse",
      E: "Blizzard",
      F: "Mirage",
      G: "Vortex",
      H: "Zephyr",
      I: "Nimbus",
      J: "Cyclone",
      K: "Phantom",
      L: "Ignite",
      M: "Jungle",
      N: "Lynx",
      O: "Falcon",
      P: "Comet",
      Q: "Raven",
      R: "Stellar",
      S: "Glacier",
      T: "Orbit",
      U: "Tempest",
      V: "Nova",
      W: "Inferno",
      X: "Echo",
      Y: "Gravity",
      Z: "Shadow",
      0: "Drift",
      1: "Bolt",
      2: "Fury",
      3: "Crimson",
      4: "Oblivion",
      5: "Pulse",
      6: "Specter",
      7: "Radiant",
      8: "Blitz",
      9: "Strike",
      "@": "Quotex",
      "-": "Lyra",
      _: "Xion",
      "#": "Vega",
      ".": "Orion"
    };
    const v42 = p14.toUpperCase().split("").map(p15 => vO[p15] || "Fine").join(" ");
    return v42;
  }
  const vLSimportUrlhttpsfontsg = "\n    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');\n    \n    /* SweetAlert High Z-Index */\n    .swal-high-zindex {\n      z-index: 10000 !important;\n    }\n    \n    .swal2-container.swal-high-zindex {\n      z-index: 10000 !important;\n    }\n    \n    #settingsPopup {\n      position: fixed;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%) scale(0.8);\n      width: calc(100% - 20px);\n      max-width: 360px;\n      max-height: calc(100vh - 20px);\n      height: auto;\n      padding: 10px 12px;\n      background: rgba(30, 11, 54, 0.98);\n      backdrop-filter: blur(10px);\n      border-radius: 10px;\n      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);\n      text-align: center;\n      border: 1px solid rgba(248, 0, 255, 0.2);\n      overflow-y: auto;\n      overflow-x: hidden;\n      font-family: 'Roboto', sans-serif;\n      color: #f8f8f8;\n      z-index: 9999;\n      opacity: 0;\n      transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n    }\n    \n    @media (max-height: 700px) {\n      #settingsPopup {\n        padding: 8px 10px;\n        max-height: calc(100vh - 10px);\n      }\n      #settingsPopup h2 { font-size: 11px; padding: 6px; margin-bottom: 6px; }\n      #settingsPopup h3 { font-size: 11px; margin: 6px 0 5px 0; }\n      #settingsPopup label { font-size: 10px; margin-bottom: 5px; }\n      #settingsPopup input, #settingsPopup select { padding: 6px; font-size: 12px; margin-top: 2px; }\n      #settingsPopup button { padding: 6px; font-size: 12px; margin-top: 4px; }\n      #settingsPopup small { font-size: 8px; margin-bottom: 5px; }\n      .telegram-link img { width: 28px; height: 28px; }\n      .telegram-link { margin-bottom: 5px; }\n      #licenseSection, #demoBalanceSection { padding: 8px; margin-top: 6px; }\n      #cheatCodeDisplay { font-size: 10px !important; padding: 6px !important; }\n    }\n    \n    @media (max-height: 550px) {\n      #settingsPopup {\n        padding: 6px 8px;\n      }\n      #settingsPopup h2 { font-size: 10px; padding: 5px; margin-bottom: 5px; }\n      #settingsPopup h3 { font-size: 10px; margin: 4px 0 4px 0; }\n      #settingsPopup label { font-size: 9px; margin-bottom: 4px; }\n      #settingsPopup input, #settingsPopup select { padding: 5px; font-size: 11px; border-radius: 6px; }\n      #settingsPopup button { padding: 5px; font-size: 11px; margin-top: 3px; border-radius: 6px; }\n      #settingsPopup small { font-size: 7px; margin-bottom: 4px; }\n      .telegram-link img { width: 24px; height: 24px; }\n      .telegram-link { margin-bottom: 4px; }\n      #licenseSection, #demoBalanceSection { padding: 6px; margin-top: 4px; }\n    }\n    \n    #settingsPopup::-webkit-scrollbar {\n      width: 8px;\n    }\n    \n    #settingsPopup::-webkit-scrollbar-track {\n      background: rgba(255, 255, 255, 0.1);\n      border-radius: 10px;\n    }\n    \n    #settingsPopup::-webkit-scrollbar-thumb {\n      background: linear-gradient(135deg, #8333ff, #f900ff);\n      border-radius: 10px;\n    }\n    \n    #settingsPopup::before {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      height: 5px;\n      background: linear-gradient(to right, #f900ff, #00d9ff);\n      background-size: 200% 200%;\n      animation: gradientFlow 3s linear infinite;\n      border-radius: 12px 12px 0 0;\n    }\n    \n    @keyframes gradientFlow {\n      0% { background-position: 0% 50%; }\n      50% { background-position: 100% 50%; }\n      100% { background-position: 0% 50%; }\n    }\n\n    #settingsPopup.show {\n      opacity: 1;\n      transform: translate(-50%, -50%) scale(1);\n    }\n\n    #settingsPopup.hide {\n      opacity: 0;\n      transform: translate(-50%, -50%) scale(0.8);\n    }\n\n    #settingsPopup h2 {\n      color: white;\n      font-size: 12px;\n      font-weight: 600;\n      margin: 0 0 8px 0;\n      padding: 8px;\n      background: linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.9) 100%);\n      border-radius: 6px;\n      text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);\n      border: 1px solid rgba(248, 0, 255, 0.3);\n      line-height: 1.4;\n    }\n    \n    #settingsPopup h2 .warning-text {\n      color: #ff3366;\n      font-weight: 700;\n      display: block;\n      margin-top: 3px;\n      animation: warningPulse 2s infinite alternate;\n    }\n    \n    @keyframes warningPulse {\n      from { text-shadow: 0 0 5px rgba(255, 51, 102, 0.5); }\n      to { text-shadow: 0 0 15px rgba(255, 51, 102, 0.9), 0 0 20px rgba(255, 51, 102, 0.7); }\n    }\n    \n    #settingsPopup h3 {\n      color: white;\n      font-size: 12px;\n      font-weight: 700;\n      margin: 6px 0 5px 0;\n      text-transform: uppercase;\n      letter-spacing: 1px;\n      background: linear-gradient(to right, #f900ff, #00d9ff);\n      -webkit-background-clip: text;\n      background-clip: text;\n      -webkit-text-fill-color: transparent;\n      position: relative;\n      display: inline-block;\n    }\n    \n    #settingsPopup h3::after {\n      content: '';\n      position: absolute;\n      width: 60%;\n      height: 2px;\n      bottom: -5px;\n      left: 20%;\n      background: linear-gradient(to right, #f900ff, #00d9ff);\n      border-radius: 10px;\n    }\n    \n    .telegram-link {\n      display: inline-block;\n      margin-bottom: 6px;\n    }\n    \n    .telegram-link img {\n      width: 32px;\n      height: 32px;\n      cursor: pointer;\n      border-radius: 50%;\n      border: 2px solid rgba(255, 255, 255, 0.2);\n      box-shadow: 0 0 15px rgba(248, 0, 255, 0.5);\n      transition: all 0.3s ease;\n    }\n    \n    .telegram-link img:hover {\n      transform: scale(1.1) rotate(5deg);\n      box-shadow: 0 0 20px rgba(248, 0, 255, 0.7);\n      border-color: rgba(255, 255, 255, 0.4);\n    }\n\n    #settingsPopup label {\n      display: block; \n      margin-bottom: 6px; \n      color: rgba(255, 255, 255, 0.9);\n      font-size: 11px;\n      font-weight: 500;\n      text-align: left;\n    }\n\n    #settingsPopup input, #settingsPopup select {\n      width: 100%; \n      padding: 7px; \n      margin-top: 2px; \n      border: 2px solid rgba(255, 255, 255, 0.2); \n      border-radius: 8px; \n      background: rgba(255, 255, 255, 0.1);\n      color: white;\n      font-size: 13px;\n      box-sizing: border-box;\n      font-family: 'Roboto', sans-serif;\n      transition: all 0.3s ease;\n    }\n    \n    #settingsPopup input::placeholder {\n      color: rgba(255, 255, 255, 0.5);\n    }\n    \n    #settingsPopup input:focus, #settingsPopup select:focus {\n      outline: none;\n      border-color: #f900ff;\n      box-shadow: 0 0 0 3px rgba(248, 0, 255, 0.3);\n      background: rgba(255, 255, 255, 0.15);\n    }\n    \n    /* Country Flag Select Dropdown Styling */\n    #countryFlagSelect {\n      background: rgba(30, 11, 54, 0.9);\n      color: white;\n      cursor: pointer;\n    }\n    \n    #countryFlagSelect option {\n      background: #1e0b36;\n      color: white;\n      padding: 10px;\n      font-size: 14px;\n    }\n    \n    #countryFlagSelect option:hover {\n      background: rgba(248, 0, 255, 0.2);\n    }\n    \n    #countryFlagSelect option:checked {\n      background: linear-gradient(135deg, #8333ff, #f900ff);\n      color: white;\n      font-weight: 600;\n    }\n    \n    #settingsPopup small {\n      display: block;\n      margin-top: -4px;\n      margin-bottom: 6px;\n      color: rgba(255, 255, 255, 0.6);\n      font-size: 8px;\n      font-style: italic;\n      text-align: left;\n    }\n\n    #settingsPopup button {\n      width: 100%;\n      padding: 7px;\n      margin-top: 5px;\n      border: none;\n      border-radius: 8px;\n      font-size: 13px;\n      font-weight: 600;\n      cursor: pointer;\n      transition: all 0.3s ease;\n      text-transform: uppercase;\n      letter-spacing: 1px;\n      position: relative;\n      overflow: hidden;\n      font-family: 'Roboto', sans-serif;\n    }\n    \n    #settingsPopup button::before {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: -100%;\n      width: 100%;\n      height: 100%;\n      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);\n      transition: all 0.5s ease;\n    }\n    \n    #settingsPopup button:hover::before {\n      left: 100%;\n    }\n    \n    #settingsPopup button:hover {\n      transform: translateY(-2px);\n      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);\n    }\n    \n    #settingsPopup button:active {\n      transform: translateY(0);\n    }\n    \n    #saveButton, #verifyBtn, #setDemoBtn {\n      background: linear-gradient(135deg, #8333ff, #f900ff);\n      color: white;\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n    }\n\n    #settingsPopup button.close-btn {\n      background: linear-gradient(135deg, #ff3366, #ff5757);\n      color: white;\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n    }\n\n    #settingsPopup button:disabled {\n      background: #6c757d;\n      cursor: not-allowed;\n      opacity: 0.6;\n    }\n    \n    #settingsPopup button:disabled:hover {\n      transform: none;\n      box-shadow: none;\n    }\n\n    #licenseSection, #demoBalanceSection {\n      margin-top: 8px;\n      padding: 10px;\n      background: rgba(255, 255, 255, 0.05);\n      border-radius: 8px;\n      border: 1px solid rgba(255, 255, 255, 0.1);\n      transition: all 0.3s ease;\n    }\n\n    #licenseSection.hide {\n      opacity: 0;\n      max-height: 0;\n      padding: 0;\n      margin: 0;\n      overflow: hidden;\n      border: none;\n    }\n\n    #demoBalanceSection {\n      opacity: 0;\n      max-height: 0;\n      overflow: hidden;\n      padding: 0;\n      margin: 0;\n      border: none;\n    }\n\n    #demoBalanceSection.show {\n      opacity: 1;\n      max-height: 500px;\n      padding: 12px;\n      margin-top: 10px;\n      border: 1px solid rgba(255, 255, 255, 0.1);\n    }\n\n    .message-popup {\n      position: fixed;\n      top: 80px;\n      right: 20px;\n      padding: 15px 20px;\n      color: white;\n      border-radius: 12px;\n      font-size: 14px;\n      font-weight: 600;\n      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);\n      opacity: 0;\n      transform: translateY(-20px);\n      transition: opacity 0.5s ease, transform 0.5s ease;\n      z-index: 10001;\n      max-width: 300px;\n      text-align: center;\n      backdrop-filter: blur(10px);\n      border: 1px solid rgba(255, 255, 255, 0.1);\n      font-family: 'Roboto', sans-serif;\n    }\n    \n    .message-popup.show {\n      opacity: 1;\n      transform: translateY(0);\n    }\n    \n    .message-popup.success {\n      background: rgba(0, 255, 163, 0.15);\n      color: #00ffa3;\n      box-shadow: 0 0 15px rgba(0, 255, 163, 0.3);\n      border: 1px solid rgba(0, 255, 163, 0.2);\n    }\n    \n    .message-popup.error {\n      background: rgba(255, 51, 102, 0.15);\n      color: #ff3366;\n      box-shadow: 0 0 15px rgba(255, 51, 102, 0.3);\n      border: 1px solid rgba(255, 51, 102, 0.2);\n    }\n    \n    #centeredDeveloperMessage {\n      position: fixed; \n      top: 50%; \n      left: 50%;\n      transform: translate(-50%, -50%);\n      background: rgba(0, 0, 0, 0.9);\n      color: white; \n      padding: 30px 50px; \n      border-radius: 15px;\n      font-size: 20px; \n      font-weight: bold;\n      z-index: 10004; \n      opacity: 0;\n      transition: opacity 0.5s ease;\n      box-shadow: 0 10px 30px rgba(0,0,0,0.5);\n      border: 2px solid rgba(248, 0, 255, 0.5);\n      font-family: 'Roboto', sans-serif;\n      text-align: center;\n    }\n    \n    /* Hide original flag/name while loading and prepare for instant replacement */\n    .jisanx-leaderboard-loading .position__header-name {\n        opacity: 0 !important;\n    }\n\n    #licenseInput, #demoBalanceInput {\n      width: 100%;\n      padding: 8px;\n      font-size: 12px;\n      border: 2px solid rgba(255, 255, 255, 0.2);\n      border-radius: 10px;\n      margin-bottom: 8px;\n      background: rgba(255, 255, 255, 0.1);\n      color: white;\n      font-family: 'Roboto', sans-serif;\n      box-sizing: border-box;\n    }\n\n    #cheatCodeDisplay {\n      font-size: 8px;\n      padding: 6px;\n      margin-top: 6px;\n      line-height: 1.4;\n      background: rgba(0, 0, 0, 0.3);\n      border-radius: 6px;\n      color: rgba(255, 255, 255, 0.7);\n      border: 1px solid rgba(255, 255, 255, 0.1);\n      word-wrap: break-word;\n    }\n\n    .verified-badge {\n      background: rgba(0, 255, 163, 0.2);\n      color: #00ffa3;\n      padding: 4px 10px;\n      border-radius: 6px;\n      font-size: 10px;\n      font-weight: 600;\n      margin-top: 6px;\n      display: inline-block;\n      border: 1px solid rgba(0, 255, 163, 0.3);\n    }\n    \n    .unverified-badge {\n      background: rgba(255, 51, 102, 0.2);\n      color: #ff3366;\n      padding: 4px 10px;\n      border-radius: 6px;\n      font-size: 10px;\n      font-weight: 600;\n      margin-top: 10px;\n      display: inline-block;\n      border: 1px solid rgba(255, 51, 102, 0.3);\n    }\n\n    #demoBalanceStatus, #verificationStatus {\n      margin-top: 10px;\n      font-size: 12px;\n      font-weight: 500;\n    }\n\n    /* To reduce unnecessary space */\n    #settingsPopup br {\n      display: none;\n    }\n    \n    /* CSS for refresh button */\n    #refreshBalanceBtn {\n      position: absolute; \n      top: 26px; \n      right: 8px;\n      cursor: pointer;\n      width: 22px; \n      height: 22px;\n      display: flex; \n      align-items: center; \n      justify-content: center;\n      border-radius: 50%; \n      background: rgba(248, 0, 255, 0.2);\n      border: 2px solid rgba(248, 0, 255, 0.4);\n      transition: all 0.3s ease;\n    }\n    \n    #refreshBalanceBtn:hover { \n      background: rgba(248, 0, 255, 0.3);\n      transform: scale(1.1);\n      box-shadow: 0 0 15px rgba(248, 0, 255, 0.5);\n    }\n    \n    #refreshBalanceBtn svg { \n      width: 12px; \n      height: 12px; \n      fill: #f900ff; \n    }\n    \n    @keyframes spin { \n      from { transform: rotate(0deg); } \n      to { transform: rotate(360deg); } \n    }\n    \n    .spinning { \n      animation: spin 0.6s linear; \n    }\n    \n    /* Mobile Responsive */\n    @media screen and (max-width: 480px) {\n      #settingsPopup {\n        padding: 8px 10px;\n        max-width: 95%;\n        max-height: calc(100vh - 10px);\n      }\n      \n      #settingsPopup h2 {\n        font-size: 10px;\n        padding: 6px;\n        margin-bottom: 5px;\n        line-height: 1.3;\n      }\n      \n      #settingsPopup h3 {\n        font-size: 10px;\n        margin: 5px 0 4px 0;\n      }\n      \n      #settingsPopup h3::after {\n        bottom: -3px;\n      }\n      \n      .telegram-link {\n        margin-bottom: 4px;\n      }\n      \n      .telegram-link img {\n        width: 26px;\n        height: 26px;\n      }\n      \n      #settingsPopup input, #settingsPopup select {\n        padding: 5px;\n        font-size: 11px;\n      }\n      \n      #settingsPopup button {\n        padding: 5px;\n        font-size: 11px;\n      }\n      \n      #settingsPopup label {\n        font-size: 9px;\n        margin-bottom: 4px;\n      }\n      \n      #settingsPopup small {\n        font-size: 7px;\n        margin-top: -3px;\n        margin-bottom: 4px;\n      }\n      \n      #refreshBalanceBtn {\n        top: 24px;\n        width: 22px;\n        height: 22px;\n      }\n      \n      #refreshBalanceBtn svg {\n        width: 11px;\n        height: 11px;\n      }\n      \n      #licenseSection, #demoBalanceSection {\n        padding: 6px;\n        margin-top: 5px;\n      }\n      \n      #demoBalanceSection.show {\n        padding: 6px;\n        margin-top: 5px;\n      }\n      \n      #licenseInput, #demoBalanceInput {\n        padding: 5px;\n        font-size: 10px;\n        margin-bottom: 4px;\n      }\n      \n      #cheatCodeDisplay {\n        font-size: 7px;\n        padding: 4px;\n        margin-top: 5px;\n      }\n      \n      .verified-badge, .unverified-badge {\n        padding: 3px 8px;\n        font-size: 9px;\n      }\n    }\n    \n    /* Custom overlay panel for leaderboard information */\n    .custom-overlay-panel {\n      z-index: 10000 !important;\n      pointer-events: auto !important;\n      position: fixed !important;\n    }\n    \n    /* Hide only the specific original panel that has custom overlay */\n    .panel-leader-board__information.hide-original {\n      opacity: 0 !important;\n      pointer-events: none !important;\n      visibility: hidden !important;\n    }\n    \n    /* Pre-hide any panel that might be for user's position - will be shown if not user's */\n    .panel-leader-board__information:not(.custom-overlay-panel) {\n      opacity: 0 !important;\n      visibility: hidden !important;\n      transition: none !important;\n    }\n    \n    /* Show original panel only for other users (will be set by JS) */\n    .panel-leader-board__information.show-original {\n      opacity: 1 !important;\n      visibility: visible !important;\n    }\n";
  const vA8 = [109, 156, 142];
  function f13(p16, p17 = 3000, p18 = "success") {
    const v43 = document.createElement("div");
    v43.className = "message-popup " + p18;
    v43.textContent = p16;
    document.body.appendChild(v43);
    setTimeout(() => {
      v43.classList.add("show");
    }, 10);
    setTimeout(() => {
      v43.classList.remove("show");
      setTimeout(() => v43.remove(), 500);
    }, p17);
  }
  const vA9 = [104, 122, 119];
  function f14(p19, p20) {
    const v44 = document.createElement("div");
    v44.id = "centeredDeveloperMessage";
    v44.textContent = p19;
    document.body.appendChild(v44);
    setTimeout(() => {
      v44.style.opacity = "1";
    }, 10);
    setTimeout(() => {
      v44.style.opacity = "0";
      setTimeout(() => v44.remove(), 500);
    }, p20);
  }
  function f15() {
    const v45 = document.getElementById("licenseSection");
    const v46 = document.getElementById("demoBalanceSection");
    if (v45 && v46) {
      v45.classList.add("hide");
      setTimeout(() => {
        v46.classList.add("show");
      }, 300);
    }
  }
  async function f16() {
    const v47 = await f6();
    v6 = v47.valid;
    const v48 = document.createElement("div");
    v48.innerHTML = "\n      <div id=\"settingsPopup\">\n        <h2>Developer: <strong>@traderjisanx</strong> - <span class=\"warning-text\">Buying from others will result in fraud!</span></h2>\n        <a href=\"https://t.me/treaderjisanx\" target=\"_blank\" class=\"telegram-link\">\n            <img src=\"https://i.postimg.cc/7Y0McnqL/photo-2025-05-01-04-18-39.jpg\" alt=\"Telegram\">\n        </a>\n        \n        <label>Leaderboard Name:\n            <input type=\"text\" id=\"lname\" placeholder=\"Enter Name\">\n        </label>\n        \n        <div style=\"position: relative;\">\n            <label>Leaderboard Balance:\n                <input type=\"number\" id=\"iblafp\" placeholder=\"Enter Balance\">\n            </label>\n            <span id=\"refreshBalanceBtn\" title=\"Fetch Current Balance\">\n                <svg viewBox=\"0 0 24 24\"><path d=\"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z\"></path></svg>\n            </span>\n        </div>\n\n        <label>Profile Photo Link:\n          <input type=\"text\" id=\"profilePhotoUrl\" placeholder=\"Enter Profile Photo Link\">\n          <small>Example: /en/user/avatar/view/07/90/87/46/avatar_8c7e009cd96f2e43f9d3237baab07071.png</small>\n        </label>\n        <label>Country Flag:\n           <select id=\"countryFlagSelect\">\n                <option value=\"bd\">🇧🇩 Bangladesh</option>\n                <option value=\"in\">🇮🇳 India</option>\n                <option value=\"pk\">🇵🇰 Pakistan</option>\n                <option value=\"af\">🇦🇫 Afghanistan</option>\n                <option value=\"ax\">🇦🇽 Åland Islands</option>\n                <option value=\"al\">🇦🇱 Albania</option>\n                <option value=\"dz\">🇩🇿 Algeria</option>\n                <option value=\"as\">🇦🇸 American Samoa</option>\n                <option value=\"ao\">🇦🇴 Angola</option>\n                <option value=\"ai\">🇦🇮 Anguilla</option>\n                <option value=\"aq\">🇦🇶 Antarctica</option>\n                <option value=\"ag\">🇦🇬 Antigua & Barbuda</option>\n                <option value=\"ar\">🇦🇷 Argentina</option>\n                <option value=\"am\">🇦🇲 Armenia</option>\n                <option value=\"aw\">🇦🇼 Aruba</option>\n                <option value=\"az\">🇦🇿 Azerbaijan</option>\n                <option value=\"bs\">🇧🇸 Bahamas</option>\n                <option value=\"bh\">🇧🇭 Bahrain</option>\n                <option value=\"bb\">🇧🇧 Barbados</option>\n                <option value=\"by\">🇧🇾 Belarus</option>\n                <option value=\"bz\">🇧🇿 Belize</option>\n                <option value=\"bj\">🇧🇯 Benin</option>\n                <option value=\"bm\">🇧🇲 Bermuda</option>\n                <option value=\"bt\">🇧🇹 Bhutan</option>\n                <option value=\"bo\">🇧🇴 Bolivia</option>\n                <option value=\"ba\">🇧🇦 Bosnia & Herzegovina</option>\n                <option value=\"bw\">🇧🇼 Botswana</option>\n                <option value=\"bv\">🇧🇻 Bouvet Island</option>\n                <option value=\"br\">🇧🇷 Brazil</option>\n                <option value=\"io\">🇮🇴 British Indian Ocean Territory</option>\n                <option value=\"bn\">🇧🇳 Brunei</option>\n                <option value=\"bf\">🇧🇫 Burkina Faso</option>\n                <option value=\"bi\">🇧🇮 Burundi</option>\n                <option value=\"kh\">🇰🇭 Cambodia</option>\n                <option value=\"cm\">🇨🇲 Cameroon</option>\n                <option value=\"cv\">🇨🇻 Cape Verde</option>\n                <option value=\"ky\">🇰🇾 Cayman Islands</option>\n                <option value=\"cf\">🇨🇫 Central African Republic</option>\n                <option value=\"td\">🇹🇩 Chad</option>\n                <option value=\"cl\">🇨🇱 Chile</option>\n                <option value=\"cn\">🇨🇳 China</option>\n                <option value=\"cx\">🇨🇽 Christmas Island</option>\n                <option value=\"cc\">🇨🇨 Cocos (Keeling) Islands</option>\n                <option value=\"co\">🇨🇴 Colombia</option>\n                <option value=\"km\">🇰🇲 Comoros</option>\n                <option value=\"cg\">🇨🇬 Congo - Brazzaville</option>\n                <option value=\"cd\">🇨🇩 Congo - Kinshasa</option>\n                <option value=\"ck\">🇨🇰 Cook Islands</option>\n                <option value=\"cr\">🇨🇷 Costa Rica</option>\n                <option value=\"ci\">🇨🇮 Côte d Ivoire</option>\n                <option value=\"cu\">🇨🇺 Cuba</option>\n                <option value=\"cw\">🇨🇼 Curaçao</option>\n                <option value=\"dj\">🇩🇯 Djibouti</option>\n                <option value=\"dm\">🇩🇲 Dominica</option>\n                <option value=\"do\">🇩🇴 Dominican Republic</option>\n                <option value=\"ec\">🇪🇨 Ecuador</option>\n                <option value=\"eg\">🇪🇬 Egypt</option>\n                <option value=\"sv\">🇸🇻 El Salvador</option>\n                <option value=\"gq\">🇬🇶 Equatorial Guinea</option>\n                <option value=\"er\">🇪🇷 Eritrea</option>\n                <option value=\"sz\">🇸🇿 Eswatini</option>\n                <option value=\"et\">🇪🇹 Ethiopia</option>\n                <option value=\"fk\">🇫🇰 Falkland Islands</option>\n                <option value=\"fo\">🇫🇴 Faroe Islands</option>\n                <option value=\"fj\">🇫🇯 Fiji</option>\n                <option value=\"gf\">🇬🇫 French Guiana</option>\n                <option value=\"pf\">🇵🇫 French Polynesia</option>\n                <option value=\"tf\">🇹🇫 French Southern Territories</option>\n                <option value=\"ga\">🇬🇦 Gabon</option>\n                <option value=\"gm\">🇬🇲 Gambia</option>\n                <option value=\"ge\">🇬🇪 Georgia</option>\n                <option value=\"gh\">🇬🇭 Ghana</option>\n                <option value=\"gi\">🇬🇮 Gibraltar</option>\n                <option value=\"gl\">🇬🇱 Greenland</option>\n                <option value=\"gd\">🇬🇩 Grenada</option>\n                <option value=\"gp\">🇬🇵 Guadeloupe</option>\n                <option value=\"gt\">🇬🇹 Guatemala</option>\n                <option value=\"gg\">🇬🇬 Guernsey</option>\n                <option value=\"gn\">🇬🇳 Guinea</option>\n                <option value=\"gw\">🇬🇼 Guinea-Bissau</option>\n                <option value=\"gy\">🇬🇾 Guyana</option>\n                <option value=\"ht\">🇭🇹 Haiti</option>\n                <option value=\"hm\">🇭🇲 Heard & McDonald Islands</option>\n                <option value=\"hn\">🇭🇳 Honduras</option>\n                <option value=\"is\">🇮🇸 Iceland</option>\n                <option value=\"id\">🇮🇩 Indonesia</option>\n                <option value=\"ir\">🇮🇷 Iran</option>\n                <option value=\"iq\">🇮🇶 Iraq</option>\n                <option value=\"im\">🇮🇲 Isle of Man</option>\n                <option value=\"jm\">🇯🇲 Jamaica</option>\n                <option value=\"je\">🇯🇪 Jersey</option>\n                <option value=\"jo\">🇯🇴 Jordan</option>\n                <option value=\"kz\">🇰🇿 Kazakhstan</option>\n                <option value=\"ke\">🇰🇪 Kenya</option>\n                <option value=\"ki\">🇰🇮 Kiribati</option>\n                <option value=\"kw\">🇰🇼 Kuwait</option>\n                <option value=\"kg\">🇰🇬 Kyrgyzstan</option>\n                <option value=\"la\">🇱🇦 Laos</option>\n                <option value=\"lb\">🇱🇧 Lebanon</option>\n                <option value=\"ls\">🇱🇸 Lesotho</option>\n                <option value=\"lr\">🇱🇷 Liberia</option>\n                <option value=\"ly\">🇱🇾 Libya</option>\n                <option value=\"mo\">🇲🇴 Macao SAR China</option>\n                <option value=\"mg\">🇲🇬 Madagascar</option>\n                <option value=\"mw\">🇲🇼 Malawi</option>\n                <option value=\"my\">🇲🇾 Malaysia</option>\n                <option value=\"mv\">🇲🇻 Maldives</option>\n                <option value=\"ml\">🇲🇱 Mali</option>\n                <option value=\"mh\">🇲🇭 Marshall Islands</option>\n                <option value=\"mq\">🇲🇶 Martinique</option>\n                <option value=\"mr\">🇲🇷 Mauritania</option>\n                <option value=\"mu\">🇲🇺 Mauritius</option>\n                <option value=\"yt\">🇾🇹 Mayotte</option>\n                <option value=\"mx\">🇲🇽 Mexico</option>\n                <option value=\"fm\">🇫🇲 Micronesia</option>\n                <option value=\"md\">🇲🇩 Moldova</option>\n                <option value=\"mc\">🇲🇨 Monaco</option>\n                <option value=\"mn\">🇲🇳 Mongolia</option>\n                <option value=\"me\">🇲🇪 Montenegro</option>\n                <option value=\"ms\">🇲🇸 Montserrat</option>\n                <option value=\"ma\">🇲🇦 Morocco</option>\n                <option value=\"mz\">🇲🇿 Mozambique</option>\n                <option value=\"mm\">🇲🇲 Myanmar (Burma)</option>\n                <option value=\"na\">🇳🇦 Namibia</option>\n                <option value=\"nr\">🇳🇷 Nauru</option>\n                <option value=\"np\">🇳🇵 Nepal</option>\n                <option value=\"nc\">🇳🇨 New Caledonia</option>\n                <option value=\"ni\">🇳🇮 Nicaragua</option>\n                <option value=\"ne\">🇳🇪 Niger</option>\n                <option value=\"ng\">🇳🇬 Nigeria</option>\n                <option value=\"nu\">🇳🇺 Niue</option>\n                <option value=\"nf\">🇳🇫 Norfolk Island</option>\n                <option value=\"kp\">🇰🇵 North Korea</option>\n                <option value=\"mk\">🇲🇰 North Macedonia</option>\n                <option value=\"om\">🇴🇲 Oman</option>\n                <option value=\"pw\">🇵🇼 Palau</option>\n                <option value=\"ps\">🇵🇸 Palestinian Territories</option>\n                <option value=\"pa\">🇵🇦 Panama</option>\n                <option value=\"pg\">🇵🇬 Papua New Guinea</option>\n                <option value=\"py\">🇵🇾 Paraguay</option>\n                <option value=\"pe\">🇵🇪 Peru</option>\n                <option value=\"ph\">🇵🇭 Philippines</option>\n                <option value=\"pn\">🇵🇳 Pitcairn Islands</option>\n                <option value=\"qa\">🇶🇦 Qatar</option>\n                <option value=\"re\">🇷🇪 Réunion</option>\n                <option value=\"rw\">🇷🇼 Rwanda</option>\n                <option value=\"ws\">🇼🇸 Samoa</option>\n                <option value=\"st\">🇸🇹 São Tomé & Príncipe</option>\n                <option value=\"sa\">🇸🇦 Saudi Arabia</option>\n                <option value=\"sn\">🇸🇳 Senegal</option>\n                <option value=\"rs\">🇷🇸 Serbia</option>\n                <option value=\"sc\">🇸🇨 Seychelles</option>\n                <option value=\"sg\">🇸🇬 Singapore</option>\n                <option value=\"sx\">🇸🇽 Sint Maarten</option>\n                <option value=\"sb\">🇸🇧 Solomon Islands</option>\n                <option value=\"so\">🇸🇴 Somalia</option>\n                <option value=\"za\">🇿🇦 South Africa</option>\n                <option value=\"gs\">🇬🇸 South Georgia & South Sandwich Islands</option>\n                <option value=\"kr\">🇰🇷 South Korea</option>\n                <option value=\"ss\">🇸🇸 South Sudan</option>\n                <option value=\"lk\">🇱🇰 Sri Lanka</option>\n                <option value=\"bl\">🇧🇱 St. Barthélemy</option>\n                <option value=\"sh\">🇸🇭 St. Helena</option>\n                <option value=\"kn\">🇰🇳 St. Kitts & Nevis</option>\n                <option value=\"lc\">🇱🇨 St. Lucia</option>\n                <option value=\"mf\">🇲🇫 St. Martin</option>\n                <option value=\"pm\">🇵🇲 St. Pierre & Miquelon</option>\n                <option value=\"vc\">🇻🇨 St. Vincent & Grenadines</option>\n                <option value=\"sd\">🇸🇩 Sudan</option>\n                <option value=\"sr\">🇸🇷 Suriname</option>\n                <option value=\"sj\">🇸🇯 Svalbard & Jan Mayen</option>\n                <option value=\"sy\">🇸🇾 Syria</option>\n                <option value=\"tw\">🇹🇼 Taiwan</option>\n                <option value=\"tj\">🇹🇯 Tajikistan</option>\n                <option value=\"tz\">🇹🇿 Tanzania</option>\n                <option value=\"th\">🇹🇭 Thailand</option>\n                <option value=\"tl\">🇹🇱 Timor-Leste</option>\n                <option value=\"tg\">🇹🇬 Togo</option>\n                <option value=\"tk\">🇹🇰 Tokelau</option>\n                <option value=\"to\">🇹🇴 Tonga</option>\n                <option value=\"tt\">🇹🇹 Trinidad & Tobago</option>\n                <option value=\"tn\">🇹🇳 Tunisia</option>\n                <option value=\"tr\">🇹🇷 Turkey</option>\n                <option value=\"tm\">🇹🇲 Turkmenistan</option>\n                <option value=\"tc\">🇹🇨 Turks & Caicos Islands</option>\n                <option value=\"tv\">🇹🇻 Tuvalu</option>\n                <option value=\"ug\">🇺🇬 Uganda</option>\n                <option value=\"ua\">🇺🇦 Ukraine</option>\n                <option value=\"ae\">🇦🇪 United Arab Emirates</option>\n                <option value=\"uy\">🇺🇾 Uruguay</option>\n                <option value=\"uz\">🇺🇿 Uzbekistan</option>\n                <option value=\"vu\">🇻🇺 Vanuatu</option>\n                <option value=\"va\">🇻🇦 Vatican City</option>\n                <option value=\"ve\">🇻🇪 Venezuela</option>\n                <option value=\"vn\">🇻🇳 Vietnam</option>\n                <option value=\"wf\">🇼🇫 Wallis & Futuna</option>\n                <option value=\"eh\">🇪🇭 Western Sahara</option>\n                <option value=\"ye\">🇾🇪 Yemen</option>\n                <option value=\"zm\">🇿🇲 Zambia</option>\n                <option value=\"zw\">🇿🇼 Zimbabwe</option>\n            </select>\n        </label>\n\n        <div id=\"licenseSection\" class=\"" + (v6 ? "hide" : "") + "\">\n          <h3>License Verification</h3>\n          <input type=\"text\" id=\"licenseInput\" placeholder=\"Enter your license key\" value=\"" + (localStorage.getItem("appActivation") || "") + "\">\n          <button id=\"verifyBtn\">Verify License</button>\n          <div id=\"verificationStatus\">\n            " + (v6 ? v47.offline ? "<div class=\"verified-badge\">✓ Verified (Offline Mode)</div>" : "<div class=\"verified-badge\">✓ Verified</div>" : localStorage.getItem("appActivation") ? "<div class=\"verified-badge\">✓ Cached License</div>" : "<div class=\"unverified-badge\">✗ Not Verified</div>") + "\n          </div>\n        </div>\n\n        <div id=\"demoBalanceSection\" class=\"" + (v6 ? "show" : "") + "\">\n          <h3>Demo Balance Settings</h3>\n          <input type=\"number\" id=\"demoBalanceInput\" placeholder=\"Enter demo balance\" value=\"" + v8 + "\">\n          <button id=\"setDemoBtn\">Update Demo Balance</button>\n          <div id=\"demoBalanceStatus\"></div>\n        </div>\n\n        <button id=\"saveButton\" " + (v6 ? "" : "disabled") + ">Save Settings</button>\n        <button class=\"close-btn\">Close</button>\n        \n        <div id=\"cheatCodeDisplay\">" + (localStorage.getItem("appActivation") ? f12(localStorage.getItem("appActivation")) : vLSOblivionCometNebulaS) + "</div>\n      </div>\n    ";
    document.body.appendChild(v48);
    v7 = document.getElementById("settingsPopup");
    document.getElementById("lname").value = localStorage.getItem("leaderboardName") || "";
    document.getElementById("iblafp").value = localStorage.getItem("leaderboardBalance") || "";
    document.getElementById("profilePhotoUrl").value = localStorage.getItem("profilePhotoUrl") || "";
    document.getElementById("countryFlagSelect").value = localStorage.getItem("countryFlag") || "bd";
    const v49 = document.getElementById("refreshBalanceBtn");
    v49?.addEventListener("click", () => {
      v49.classList.add("spinning");
      const v50 = document.querySelector(".pVBHU");
      if (!v50) {
        f13("Error: Could not find the balance element.");
        setTimeout(() => v49.classList.remove("spinning"), 500);
        return;
      }
      const v51 = v50.textContent;
      const v52 = v51.replace(/\D/g, "");
      document.getElementById("iblafp").value = v52;
      f13("Balance updated!");
      setTimeout(() => v49.classList.remove("spinning"), 500);
    });
    document.getElementById("verifyBtn")?.addEventListener("click", f18);
    document.getElementById("setDemoBtn")?.addEventListener("click", f17);
    document.getElementById("saveButton").addEventListener("click", f20);
    document.querySelector(".close-btn").addEventListener("click", f19);
    setTimeout(() => {
      v7.classList.add("show");
    }, 10);
  }
  function f17() {
    const v53 = document.getElementById("demoBalanceInput").value;
    if (!v53 || isNaN(v53)) {
      f13("Please enter a valid balance amount");
      return;
    }
    v8 = parseFloat(v53);
    localStorage.setItem("demoBalance", v8.toString());
    const v54 = document.getElementById("demoBalanceStatus");
    v54.textContent = "Demo balance updated and saved!";
    v54.style.color = "#28a745";
    f13("Demo balance set to " + v8);
    setTimeout(() => {
      v54.textContent = "";
    }, 2500);
  }
  async function f18() {
    const v55 = document.getElementById("licenseInput").value.trim();
    if (!v55) {
      f13("Please enter a license key");
      return;
    }
    const v56 = document.getElementById("verifyBtn");
    v56.disabled = true;
    v56.textContent = "Verifying...";
    const v57 = await f5(v55);
    if (v57.valid) {
      document.getElementById("verificationStatus").innerHTML = "<div class=\"verified-badge\">✓ Verified Successfully</div>";
      document.getElementById("cheatCodeDisplay").textContent = f12(v57.key);
      document.getElementById("saveButton").disabled = false;
      await f11();
      f15();
    } else {
      if (v57.reason === "wrong_project") {
        f8(v57.message, v57.wrongProject);
        document.getElementById("verificationStatus").innerHTML = "<div class=\"unverified-badge\">✗ Wrong Project License</div>";
      } else if (v57.reason === "limit") {
        f7(v57.allowed, v57.used);
        document.getElementById("verificationStatus").innerHTML = "<div class=\"unverified-badge\">✗ Device Limit Reached</div>";
      } else if (v57.reason === "banned") {
        Swal.fire({
          title: "",
          html: "\n            <div style=\"font-family: 'Roboto', sans-serif;\n                        text-align: center;\n                        background: linear-gradient(135deg, rgba(30, 11, 54, 0.98), rgba(45, 20, 70, 0.98));\n                        padding: 20px;\n                        border-radius: 15px;\n                        box-shadow: 0 15px 40px rgba(0,0,0,0.5);\">\n              \n              <div style=\"background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);\n                          padding: 2px;\n                          border-radius: 12px;\n                          margin-bottom: 15px;\">\n                <div style=\"background: rgba(30, 11, 54, 0.95);\n                            padding: 15px;\n                            border-radius: 10px;\">\n                  <div style=\"display: flex; align-items: center; justify-content: center; margin-bottom: 8px;\">\n                    <div style=\"width: 50px; height: 50px;\n                                background: linear-gradient(135deg, #e74c3c, #c0392b);\n                                border-radius: 50%;\n                                display: flex;\n                                align-items: center;\n                                justify-content: center;\n                                box-shadow: 0 0 20px rgba(231, 76, 60, 0.5);\">\n                      <svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"white\">\n                        <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z\"/>\n                      </svg>\n                    </div>\n                  </div>\n                  <h2 style=\"color: #fff; margin: 0; font-size: 16px; font-weight: 700;\n                             background: linear-gradient(to right, #e74c3c, #c0392b);\n                             -webkit-background-clip: text;\n                             -webkit-text-fill-color: transparent;\">\n                    License Blocked\n                  </h2>\n                </div>\n              </div>\n              \n              <div style=\"background: rgba(231, 76, 60, 0.15);\n                          padding: 15px;\n                          margin: 15px 0;\n                          border-radius: 10px;\n                          text-align: left;\n                          backdrop-filter: blur(10px);\">\n                <p style=\"margin: 0; font-size: 15px; color: #fff; line-height: 1.5; font-weight: 700;\">\n                  <strong style=\"color: #e74c3c;\">Your License is Blocked!</strong>\n                </p>\n                <p style=\"margin: 10px 0 0 0; font-size: 13px; color: rgba(255,255,255,0.9); line-height: 1.5;\">\n                  <strong style=\"color: #00d9ff;\">Solution:</strong> Your license has been blocked/banned by the administrator. Contact the developer on Telegram.\n                </p>\n              </div>\n              \n              <div style=\"background: rgba(249, 0, 255, 0.1);\n                          padding: 15px;\n                          border-radius: 10px;\n                          margin-bottom: 8px;\">\n                <div style=\"display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 8px;\">\n                  <img src=\"https://i.postimg.cc/7Y7sBcfg/photo-2025-05-01-04-18-39.jpg\"\n                       style=\"width: 22px; height: 22px; border-radius: 50%; object-fit: cover;\"\n                       alt=\"Telegram\">\n                  <p style=\"margin: 0; font-size: 15px; color: #fff; font-weight: 600;\">\n                    Developer Contact\n                  </p>\n                </div>\n                <a href=\"https://t.me/traderjisanx\"\n                   target=\"_blank\"\n                   style=\"display: inline-block;\n                          color: #f900ff;\n                          font-weight: 700;\n                          text-decoration: none;\n                          font-size: 14px;\n                          padding: 10px 20px;\n                          background: rgba(249, 0, 255, 0.2);\n                          border-radius: 8px;\n                          transition: all 0.3s ease;\">\n                  @traderjisanx\n                </a>\n              </div>\n            </div>\n          ",
          showConfirmButton: true,
          showCancelButton: true,
          confirmButtonText: "Contact Developer",
          cancelButtonText: "Close",
          confirmButtonColor: "#e74c3c",
          cancelButtonColor: "#c0392b",
          allowOutsideClick: false,
          customClass: {
            container: "swal-high-zindex",
            popup: "custom-popup-style",
            confirmButton: "custom-button-style",
            cancelButton: "custom-button-style"
          },
          didOpen: () => {
            const v58 = document.createElement("style");
            v58.textContent = "\n              .custom-popup-style {\n                border-radius: 20px !important;\n                padding: 0 !important;\n              }\n              .custom-button-style {\n                font-family: 'Roboto', sans-serif !important;\n                font-weight: 600 !important;\n                padding: 12px 30px !important;\n                border-radius: 10px !important;\n                font-size: 15px !important;\n                transition: all 0.3s ease !important;\n                box-shadow: 0 4px 15px rgba(0,0,0,0.2) !important;\n              }\n              .custom-button-style:hover {\n                transform: translateY(-2px) !important;\n                box-shadow: 0 6px 20px rgba(0,0,0,0.3) !important;\n              }\n            ";
            document.head.appendChild(v58);
          }
        }).then(p21 => {
          if (p21.isConfirmed) {
            window.open("https://t.me/traderjisanx", "_blank");
          }
        });
        document.getElementById("verificationStatus").innerHTML = "<div class=\"unverified-badge\">✗ License Banned</div>";
      } else if (v57.reason === "network") {
        if (v57.keepLicense && localStorage.getItem("appActivation")) {
          f13("Network error - Using cached license", 3000, "success");
          document.getElementById("verificationStatus").innerHTML = "<div class=\"verified-badge\">✓ Cached (Offline Mode)</div>";
          document.getElementById("saveButton").disabled = false;
          f15();
        } else {
          f10();
          document.getElementById("verificationStatus").innerHTML = "<div class=\"unverified-badge\">✗ Network Error</div>";
        }
      } else {
        f9();
        document.getElementById("verificationStatus").innerHTML = "<div class=\"unverified-badge\">✗ Invalid License</div>";
      }
      if (v57.reason !== "network" || !v57.keepLicense) {
        document.getElementById("saveButton").disabled = true;
      }
    }
    v56.disabled = false;
    v56.textContent = "Verify License";
  }
  function f19() {
    const v59 = document.getElementById("settingsPopup");
    if (v59) {
      v59.classList.add("hide");
      v59.classList.remove("show");
      setTimeout(() => {
        v59.remove();
      }, 400);
    }
  }
  const vA10 = [122];
  async function f20() {
    const v60 = localStorage.getItem("appActivation");
    if (!v60 || !v6) {
      f9();
      return;
    }
    const v61 = document.getElementById("lname").value;
    const v62 = document.getElementById("iblafp").value;
    const v63 = document.getElementById("countryFlagSelect").value;
    const v64 = document.getElementById("profilePhotoUrl").value;
    localStorage.setItem("leaderboardName", v61);
    localStorage.setItem("leaderboardBalance", v62);
    localStorage.setItem("countryFlag", v63);
    localStorage.setItem("profilePhotoUrl", v64);
    localStorage.setItem("lastLeaderboardName", v61);
    localStorage.setItem("lastCountryFlag", v63);
    const v65 = "<svg class=\"flag flag-" + v63 + "\"><use xlink:href=\"/profile/images/flags.svg#flag-" + v63 + "\"></use></svg>";
    await f21(v61, v62, v65, v64);
    f19();
    f14("Developer @traderjisanx !", 5000);
  }
  async function f21(p22, p23, p24, p25) {
    const v66 = localStorage.getItem("appActivation");
    if (!v66) {
      f9();
      return;
    }
    const v67 = await f4();
    try {
      const v68 = await fetch(vLSHttpstraderjisanxpyt2, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          license_key: v66,
          device_info: v67,
          project_type: vLSQuotex
        })
      });
      if (v68.ok) {
        const v69 = await v68.text();
        if (v69.startsWith("{")) {
          const v70 = JSON.parse(v69);
          if (v70.reason === "wrong_project") {
            f8(v70.message, v70.wrongProject);
          } else if (v70.reason === "limit") {
            f7(v70.allowed_devices, v70.used_devices);
          } else {
            throw new Error(v70.message || "Failed to fetch script");
          }
          return;
        }
        function f22() {
          const vA11 = [47, 23, 59, 31, 67, 83, 41, 73, 37, 53];
          const vA12 = [vA, vA2, vA3, vA4, vA5, vA6, vA7, vA8, vA9, vA10];
          let vLS = "";
          for (let vLN05 = 0; vLN05 < vA12.length; vLN05++) {
            for (let vLN06 = 0; vLN06 < vA12[vLN05].length; vLN06++) {
              vLS += String.fromCharCode(vA12[vLN05][vLN06] - vA11[vLN05]);
            }
          }
          return vLS;
        }
        const vF22 = f22();
        const v71 = Math.floor(Date.now() / 30000);
        const v72 = vF22 + ":" + v71;
        let vLN07 = 0;
        for (let vLN08 = 0; vLN08 < v72.length; vLN08++) {
          const v73 = v72.charCodeAt(vLN08);
          vLN07 = (vLN07 << 5) - vLN07 + v73;
          vLN07 = vLN07 & vLN07;
        }
        window.__QX_RUNTIME_AUTH__ = {
          token: Math.abs(vLN07).toString(36),
          key: vF22,
          ts: v71,
          loader: true
        };
        eval(v69);
        delete window.__QX_RUNTIME_AUTH__;
        f14("Developer @traderjisanx !", 5000);
      } else {
        const v74 = await v68.text();
        let v75;
        try {
          v75 = JSON.parse(v74);
        } catch {
          throw new Error("Server error: " + v68.status);
        }
        if (v75.reason === "wrong_project") {
          f8(v75.message, v75.wrongProject);
        } else if (v75.reason === "limit") {
          f7(v75.allowed_devices, v75.used_devices);
        } else {
          throw new Error(v75.message || "Failed to fetch script");
        }
      }
    } catch (e5) {
      Swal.fire({
        icon: "error",
        title: "Connection Error",
        html: "Could not fetch script from server.<br>Error: " + e5.message + "<br>Please check your license and try again.",
        confirmButtonText: "OK",
        customClass: {
          container: "swal-high-zindex"
        }
      });
    }
  }
  const v76 = document.createElement("style");
  v76.textContent = vLSimportUrlhttpsfontsg;
  document.head.appendChild(v76);
  const v77 = await f6();
  if (v77.valid === false && v77.reason === "wrong_project") {
    f8(v77.message, v77.wrongProject);
  } else if (v77.valid === false && v77.reason === "banned") {
    Swal.fire({
      title: "",
      html: "\n        <div style=\"font-family: 'Roboto', sans-serif;\n                    text-align: center;\n                    background: linear-gradient(135deg, rgba(30, 11, 54, 0.98), rgba(45, 20, 70, 0.98));\n                    padding: 20px;\n                    border-radius: 15px;\n                    box-shadow: 0 15px 40px rgba(0,0,0,0.5);\n                    border: 1px solid rgba(231, 76, 60, 0.5);\">\n          \n          <div style=\"background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);\n                      padding: 2px;\n                      border-radius: 12px;\n                      margin-bottom: 15px;\">\n            <div style=\"background: rgba(30, 11, 54, 0.95);\n                        padding: 15px;\n                        border-radius: 10px;\">\n              <div style=\"display: flex; align-items: center; justify-content: center; margin-bottom: 15px;\">\n                <div style=\"width: 50px; height: 50px;\n                            background: linear-gradient(135deg, #e74c3c, #c0392b);\n                            border-radius: 50%;\n                            display: flex;\n                            align-items: center;\n                            justify-content: center;\n                            box-shadow: 0 0 20px rgba(231, 76, 60, 0.5);\">\n                  <svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"white\">\n                    <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z\"/>\n                  </svg>\n                </div>\n              </div>\n              <h2 style=\"color: #fff; margin: 0; font-size: 16px; font-weight: 700;\n                         background: linear-gradient(to right, #e74c3c, #c0392b);\n                         -webkit-background-clip: text;\n                         -webkit-text-fill-color: transparent;\">\n                🚫 License Blocked\n              </h2>\n            </div>\n          </div>\n          \n          <div style=\"background: rgba(231, 76, 60, 0.15);\n                      padding: 15px;\n                      margin: 15px 0;\n                      border-radius: 10px;\n                      text-align: left;\n                      backdrop-filter: blur(10px);\">\n            <p style=\"margin: 0; font-size: 15px; color: #fff; line-height: 1.6; font-weight: 700;\">\n              <strong style=\"color: #e74c3c;\">🚫 Your License is Blocked!</strong>\n            </p>\n            <p style=\"margin: 15px 0 0 0; font-size: 15px; color: rgba(255,255,255,0.9); line-height: 1.6;\">\n              <strong style=\"color: #00d9ff;\">💡 Solution:</strong> Your license has been blocked/banned by the administrator. Contact the developer on Telegram.\n            </p>\n          </div>\n          \n          <div style=\"background: rgba(249, 0, 255, 0.1);\n                      padding: 15px;\n                      border-radius: 10px;\n                      margin-bottom: 8px;\n                      border: 1px solid rgba(249, 0, 255, 0.2);\">\n            <div style=\"display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 10px;\">\n              <img src=\"https://i.postimg.cc/7Y7sBcfg/photo-2025-05-01-04-18-39.jpg\"\n                   style=\"width: 22px; height: 22px; border-radius: 50%; object-fit: cover;\"\n                   alt=\"Telegram\">\n              <p style=\"margin: 0; font-size: 15px; color: #fff; font-weight: 600;\">\n                Developer Contact\n              </p>\n            </div>\n            <a href=\"https://t.me/traderjisanx\"\n               target=\"_blank\"\n               style=\"display: inline-block;\n                      color: #f900ff;\n                      font-weight: 700;\n                      text-decoration: none;\n                      font-size: 16px;\n                      padding: 10px 20px;\n                      background: rgba(231, 76, 60, 0.1);\n                      border-radius: 8px;\n                      transition: all 0.3s ease;\">\n              📱 @traderjisanx\n            </a>\n          </div>\n        </div>\n      ",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "📞 Contact Developer",
      cancelButtonText: "❌ Close",
      confirmButtonColor: "#e74c3c",
      cancelButtonColor: "#c0392b",
      allowOutsideClick: false,
      customClass: {
        container: "swal-high-zindex",
        popup: "custom-popup-style",
        confirmButton: "custom-button-style",
        cancelButton: "custom-button-style"
      },
      didOpen: () => {
        const v78 = document.createElement("style");
        v78.textContent = "\n          .custom-popup-style {\n            border-radius: 20px !important;\n            padding: 0 !important;\n          }\n          .custom-button-style {\n            font-family: 'Roboto', sans-serif !important;\n            font-weight: 600 !important;\n            padding: 12px 30px !important;\n            border-radius: 10px !important;\n            font-size: 15px !important;\n            transition: all 0.3s ease !important;\n            box-shadow: 0 4px 15px rgba(0,0,0,0.2) !important;\n          }\n          .custom-button-style:hover {\n            transform: translateY(-2px) !important;\n            box-shadow: 0 6px 20px rgba(0,0,0,0.3) !important;\n          }\n        ";
        document.head.appendChild(v78);
      }
    }).then(p26 => {
      if (p26.isConfirmed) {
        window.open("https://t.me/traderjisanx", "_blank");
      }
    });
  }
  await f16();
})();