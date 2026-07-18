import { useState } from "react";

function COMAGR001_00_00DG() {
  const agreeList = [
    { no: 1, name: "개인신용정보 수집∙이용 동의", isaFlag: true },
    { no: 2, name: "상품설명 확인", isaFlag: true },
    { no: 3, name: "마케팅 활용 동의(선택)", isaFlag: false },
  ];

  const [agreeMap, setAgreeMap] = useState<Record<number, string>>({});

  return (
    <div
      style={{
        border: "1px solid #888",
        padding: 20,
        width: 500,
        margin: "40px auto",
      }}
    >
      <h2>동의서등록 (정기적금)</h2>
      <table border={1} style={{ width: "100%", marginTop: 10 }}>
        <thead>
          <tr>
            <th>NO</th>
            <th>동의서명</th>
            <th>동의여부</th>
          </tr>
        </thead>
        <tbody>
          {agreeList.map((item) =>
            item.isaFlag ? (
              <tr key={item.no}>
                <td>{item.no}</td>
                <td>{item.name}</td>
                <td>
                  <label>
                    <input
                      type="radio"
                      name={`agree${item.no}`}
                      value="Y"
                      checked={agreeMap[item.no] === "Y"}
                      onChange={() =>
                        setAgreeMap({ ...agreeMap, [item.no]: "Y" })
                      }
                    />
                    Y
                  </label>
                  <label>
                    <input
                      type="radio"
                      name={`agree${item.no}`}
                      value="N"
                      checked={agreeMap[item.no] === "N"}
                      onChange={() =>
                        setAgreeMap({ ...agreeMap, [item.no]: "N" })
                      }
                    />
                    N
                  </label>
                </td>
              </tr>
            ) : null,
          )}
        </tbody>
      </table>
      <div style={{ fontSize: 12, color: "gray", marginTop: 8 }}>
        (임시) 현재 동의 상태: {JSON.stringify(agreeMap)}
      </div>
      <div style={{ marginTop: 15, textAlign: "right" }}>
        <button onClick={() => console.log("[닫기] clicked")}>닫기</button>
        <button onClick={() => console.log("[확인] clicked")}>확인</button>
      </div>
    </div>
  );
}

export default COMAGR001_00_00DG;
