import * as puppeteer from 'puppeteer';
import * as fs from 'fs';

export async function createBrowserInstance() {
    return await puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
        headless: 'new',
    });
    
}

const pdfOutputPath = 'output.pdf';

async function startApplication() {
    // check if there is already a file in the directory by the name example.png
    // if there is, delete it
    if(fs.existsSync('output.pdf')) {
        console.log("Deleting output.pdf");
        fs.unlinkSync('output.pdf');
    }

    console.log("Starting");
    console.time("CreatingBrowserInstance");
    const browser = await createBrowserInstance();
    console.timeEnd("CreatingBrowserInstance");
    console.log("Browser created")
    const page = await browser.newPage();
    console.log("Page created")
    await page.setContent(htmlContent, { waitUntil: "networkidle0" });

    console.log("Set content")
    // Generate the PDF buffer
    await page.pdf({
        path: pdfOutputPath, // Saves pdf to disk.
        format: "a4", // Set the page format (you can choose other formats)
        margin: { top: "1cm", right: "1cm", bottom: "1cm", left: "1cm" }, // Set the margins
        displayHeaderFooter: true,
        headerTemplate: `<div></div>`,
        footerTemplate: `<div
        style="
          color: #101112;
          direction: ltr;
          font-family: 'Helvetica Neue', Helvetica,
            Arial, sans-serif;
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0px;
          text-align: center;
          width: 100%;
        "
      >
        <p style="margin: 0; width: 100%; text-align: center;">
          Running Tide - Sensitive and Confidential
        </p>
      </div>`,
    });

    console.log("PDF generated")

    await browser.close();
    console.log("Browser closed")

    console.log("Done")
}

startApplication();


const htmlContent = 
`<!-- Template generated using pro.beefree.io -->
<!DOCTYPE html>
<html
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  lang="en"
>
  <head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!--[if mso
      ]><xml
        ><o:OfficeDocumentSettings
          ><o:PixelsPerInch>96</o:PixelsPerInch
          ><o:AllowPNG /></o:OfficeDocumentSettings></xml
    ><![endif]-->
    <style>
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        padding: 0;
      }

      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: inherit !important;
      }

      #MessageViewBody a {
        color: inherit;
        text-decoration: none;
      }

      p {
        line-height: inherit;
      }

      .desktop_hide,
      .desktop_hide table {
        mso-hide: all;
        display: none;
        max-height: 0px;
        overflow: hidden;
      }

      .image_block img + div {
        display: none;
      }

      @media (max-width: 620px) {
        .desktop_hide table.icons-inner {
          display: inline-block !important;
        }

        .icons-inner {
          text-align: center;
        }

        .icons-inner td {
          margin: 0 auto;
        }

        .row-content {
          width: 100% !important;
        }

        .stack .column {
          width: 100%;
          display: block;
        }

        .mobile_hide {
          max-width: 0;
          min-height: 0;
          max-height: 0;
          font-size: 0;
          display: none;
          overflow: hidden;
        }

        .desktop_hide,
        .desktop_hide table {
          max-height: none !important;
          display: table !important;
        }
      }
    </style>
  </head>

  <body
    style="
      text-size-adjust: none;
      background-color: #fff;
      margin: 0;
      padding: 0;
    "
  >
    <table
      class="nl-container"
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        background-color: #fff;
        background-image: none;
        background-position: 0 0;
        background-repeat: no-repeat;
        background-size: auto;
      "
    >
      <tbody>
        <tr>
          <td>
            <table
              class="row row-1"
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      class="row-content stack"
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        color: #000;
                        width: 600px;
                        margin: 0 auto;
                      "
                      width="600"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            width="100%"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              text-align: left;
                              font-weight: 400;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                          >
                            <table
                              class="heading_block block-1"
                              width="100%"
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                            >
                              <tr>
                                <td class="pad">
                                  <h1
                                    style="
                                      margin: 0;
                                      color: #000000;
                                      direction: ltr;
                                      font-family: 'Helvetica Neue', Helvetica,
                                        Arial, sans-serif;
                                      font-size: 20px;
                                      font-weight: 400;
                                      letter-spacing: normal;
                                      line-height: 120%;
                                      text-align: left;
                                      margin-top: 0;
                                      margin-bottom: 0;
                                    "
                                  >
                                    <strong>Running Tide: </strong>Daily
                                    Dispersion Report<br />
                                  </h1>
                                </td>
                              </tr>
                            </table>
                            <table
                              class="heading_block block-2"
                              width="100%"
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                            >
                              <tr>
                                <td class="pad">
                                  <h3
                                    style="
                                      margin: 0;
                                      color: #000000;
                                      direction: ltr;
                                      font-family: 'Helvetica Neue', Helvetica,
                                        Arial, sans-serif;
                                      font-size: 16px;
                                      font-weight: 400;
                                      letter-spacing: normal;
                                      line-height: 120%;
                                      text-align: left;
                                      margin-top: 0;
                                      margin-bottom: 0;
                                    "
                                  >
                                    <span class="tinyMce-placeholder"
                                      ><strong>Deployment:</strong>
                                      IS-CD-3&nbsp;<br
                                    /></span>
                                  </h3>
                                </td>
                              </tr>
                            </table>
                            <table
                              class="heading_block block-3"
                              width="100%"
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                            >
                              <tr>
                                <td class="pad">
                                  <h3
                                    style="
                                      margin: 0;
                                      color: #000000;
                                      direction: ltr;
                                      font-family: 'Helvetica Neue', Helvetica,
                                        Arial, sans-serif;
                                      font-size: 16px;
                                      font-weight: 400;
                                      letter-spacing: normal;
                                      line-height: 120%;
                                      text-align: left;
                                      margin-top: 0;
                                      margin-bottom: 0;
                                    "
                                  >
                                    <!-- Wednesday, May 17
                                        2023 -->
                                    <span class="tinyMce-placeholder"
                                      ><strong>Day0:</strong>
                                      Wednesday, June 7 2023</span
                                    >
                                  </h3>
                                </td>
                              </tr>
                            </table>
                            <table
                              class="paragraph_block block-4"
                              width="100%"
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                            >
                              <tr>
                                <td class="pad">
                                  <div
                                    style="
                                      color: #101112;
                                      direction: ltr;
                                      font-family: 'Helvetica Neue', Helvetica,
                                        Arial, sans-serif;
                                      font-size: 14px;
                                      font-weight: 400;
                                      letter-spacing: 0px;
                                      line-height: 120%;
                                      text-align: left;
                                      mso-line-height-alt: 19.2px;
                                    "
                                  >
                                    <p style="margin: 0; margin-bottom: 16px">
                                      Running Tide successfully deployed ~2585 metric tons (wet weight) of substrate, at The deployment was executed by tug and barge, BB Server IMO 9410612. The payload was loaded onto the barge, and deployed in the open ocean by pushing it off the barge using firefighting cannons. This is partially done to minimize likelihood of aggregation. Deployment commenced on June 6, 2023.
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              class="image_block block-5"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                            >
                              <tr>
                                <td class="pad">
                                  <div
                                    class="alignment"
                                    align="center"
                                    style="line-height: 10px"
                                  >
                                    <img
                                      src="https://pbs.twimg.com/media/CiMiO39XIAAiPNA?format&#x3D;jpg&amp;name&#x3D;medium"
                                      style="
                                        height: auto;
                                        display: block;
                                        border: 0;
                                        max-width: 600px;
                                        width: 100%;
                                      "
                                      width="600"
                                    />
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              class="paragraph_block block-6"
                              width="100%"
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                            >
                              <tr>
                                <td class="pad">
                                  <div
                                    style="
                                      color: #101112;
                                      direction: ltr;
                                      font-family: 'Helvetica Neue', Helvetica,
                                        Arial, sans-serif;
                                      font-size: 11px;
                                      font-weight: 400;
                                      letter-spacing: 0px;
                                      line-height: 120%;
                                      text-align: left;
                                      mso-line-height-alt: 19.2px;
                                    "
                                  >
                                    <p style="margin: 0">
                                      <strong
                                        >June 7, 2023 | Figure
                                        0:</strong
                                      >
                                      A cluster of green points representing the deployment location of the buoys can be seen to the south of Iceland out over the basin at approximately 60° 49′ N, 24° 11′ W. The barge and tug, BB Server, are represented by the northernmost green point as they return to port.
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              class="image_block block-5"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                            >
                              <tr>
                                <td class="pad">
                                  <div
                                    class="alignment"
                                    align="center"
                                    style="line-height: 10px"
                                  >
                                    <img
                                      src="https://pbs.twimg.com/media/CiMiO39XIAAiPNA?format&#x3D;jpg&amp;name&#x3D;medium"
                                      style="
                                        height: auto;
                                        display: block;
                                        border: 0;
                                        max-width: 600px;
                                        width: 100%;
                                      "
                                      width="600"
                                    />
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              class="paragraph_block block-6"
                              width="100%"
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                            >
                              <tr>
                                <td class="pad">
                                  <div
                                    style="
                                      color: #101112;
                                      direction: ltr;
                                      font-family: 'Helvetica Neue', Helvetica,
                                        Arial, sans-serif;
                                      font-size: 11px;
                                      font-weight: 400;
                                      letter-spacing: 0px;
                                      line-height: 120%;
                                      text-align: left;
                                      mso-line-height-alt: 19.2px;
                                    "
                                  >
                                    <p style="margin: 0">
                                      <strong
                                        >June 7, 2023 | Figure
                                        1:</strong
                                      >
                                      A cluster of green points representing the deployment location of the buoys can be seen to the south of Iceland out over the basin at approximately 60° 49′ N, 24° 11′ W. The barge and tug, BB Server, are represented by the northernmost green point as they return to port.
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              class="paragraph_block block-4"
                              width="100%"
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                            >
                              <tr>
                                <td class="pad">
                                  <div
                                    style="
                                      color: #101112;
                                      direction: ltr;
                                      font-family: 'Helvetica Neue', Helvetica,
                                        Arial, sans-serif;
                                      font-size: 14;
                                      font-weight: 400;
                                      letter-spacing: 0px;
                                      line-height: 120%;
                                      text-align: left;
                                      mso-line-height-alt: 19.2px;
                                    "
                                  >
                                    <p style="margin: 0; margin-bottom: 16px">
                                      During deployment, the vessel was drifting, which spread out the substrate and plume. We expect to see this dispersion represented in the data returned by the buoys in the coming days. The deployed substrate is expected to float for up to two weeks. Subsequent reports will include information on float and sink ratio. 
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              class="paragraph_block block-8"
                              width="100%"
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                            >
                              <tr>
                                <td class="pad">
                                  <div
                                    style="
                                      color: #101112;
                                      direction: ltr;
                                      font-family: 'Helvetica Neue', Helvetica,
                                        Arial, sans-serif;
                                      font-size: 12px;
                                      font-weight: 400;
                                      letter-spacing: 0px;
                                      line-height: 120%;
                                      text-align: left;
                                      mso-line-height-alt: 13.2px;
                                    "
                                  >
                                    <p style="margin: 0">
                                      <strong
                                        >For any questions or concerns,
                                        contact<br /></strong
                                      >Kristinn Hrobjartsson, General Manager
                                      Running Tide Iceland
                                      (kiddi@runningtide.com)
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <hr
                              style="page-break-after: always; display: none"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- End -->
  </body>
</html>
`;
