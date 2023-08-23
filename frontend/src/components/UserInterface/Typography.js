import React from "react";

function Typography(props) {
  return (
    <>
      <div style={{}} className="default round-border mt-3 p-5">
        <div className="default-dark font-lg">Headings</div>
        <div className="d-flex flex-row align-items-center mb-3">
          <div className="col-lg-3">H1</div>
          <div className="col-lg-9">
            <div style={{ fontSize: "96px", color: "rgba(50, 71, 92, 0.87)" }}>
              Heading 1
            </div>
            <div>font-size: 96px / line-height: 112px / font-weight: 500</div>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center mb-3">
          <div className="col-lg-3">H3</div>
          <div className="col-lg-9">
            <div style={{ fontSize: "60x", color: "rgba(50, 71, 92, 0.87)" }}>
              Heading 2
            </div>
            <div>font-size: 60px / line-height: 112px / font-weight: 500</div>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center mb-3">
          <div className="col-lg-3">H3</div>
          <div className="col-lg-9">
            <div style={{ fontSize: "48px", color: "rgba(50, 71, 92, 0.87)" }}>
              Heading 3
            </div>
            <div>font-size: 48px / line-height: 112px / font-weight: 500</div>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center mb-3">
          <div className="col-lg-3">H4</div>
          <div className="col-lg-9">
            <div style={{ fontSize: "32px", color: "rgba(50, 71, 92, 0.87)" }}>
              Heading 4
            </div>
            <div>font-size: 32px / line-height: 112px / font-weight: 500</div>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center mb-3">
          <div className="col-lg-3">H5</div>
          <div className="col-lg-9">
            <div style={{ fontSize: "24px", color: "rgba(50, 71, 92, 0.87)" }}>
              Heading 5
            </div>
            <div>font-size: 24px / line-height: 112px / font-weight: 500</div>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center mb-3">
          <div className="col-lg-3">H6</div>
          <div className="col-lg-9">
            <div style={{ fontSize: "20px", color: "rgba(50, 71, 92, 0.87)" }}>
              Heading 6
            </div>
            <div>font-size: 20px / line-height: 112px / font-weight: 500</div>
          </div>
        </div>
      </div>
      <div style={{}} className="default round-border mt-3 p-5">
        <div className="default-dark font-lg">Texts</div>
        <div className="d-flex flex-row align-items-center mb-3">
          <div className="col-lg-3">subtitle1</div>
          <div className="col-lg-9">
            <div style={{ fontSize: "16px", color: "rgba(50, 71, 92, 0.87)" }}>
              Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.
            </div>
            <div>font-size: 16px / line-height: 28px / font-weight: 400</div>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center mb-3">
          <div className="col-lg-3">subtitle2</div>
          <div className="col-lg-9">
            <div style={{ fontSize: "14px", color: "rgba(50, 71, 92, 0.87)" }}>
              Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.
            </div>
            <div>font-size: 14px / line-height: 22px / font-weight: 500</div>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center mb-3">
          <div className="col-lg-3">body1</div>
          <div className="col-lg-9">
            <div style={{ fontSize: "16px", color: "rgba(50, 71, 92, 0.87)" }}>
              Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.
            </div>
            <div>font-size: 16px / line-height: 28px / font-weight: 400</div>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center mb-3">
          <div className="col-lg-3">body2</div>
          <div className="col-lg-9">
            <div style={{ fontSize: "14px", color: "rgba(50, 71, 92, 0.87)" }}>
              Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.
            </div>
            <div>font-size: 14px / line-height: 28px / font-weight: 400</div>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center mb-3">
          <div className="col-lg-3">button</div>
          <div className="col-lg-9">
            <div style={{ fontSize: "14px", color: "rgba(50, 71, 92, 0.87)" }}>
              Button text
            </div>
            <div>font-size: 14px / line-height: 28px / font-weight: 400</div>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center mb-3">
          <div className="col-lg-3">caption</div>
          <div className="col-lg-9">
            <div style={{ fontSize: "12px", color: "rgba(50, 71, 92, 0.87)" }}>
              Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.
            </div>
            <div>font-size: 12px / line-height: 28px / font-weight: 400</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Typography;
