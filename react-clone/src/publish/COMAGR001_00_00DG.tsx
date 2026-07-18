import { useState } from "react";

interface Props {
  onClose: () => void;
}

function COMAGR001_00_00DG({ onClose }: Props) {
  const agreeList = [
    { no: 1, name: "개인신용정보 수집∙이용 동의", isaFlag: true },
    { no: 2, name: "상품설명 확인", isaFlag: true },
    { no: 3, name: "마케팅 활용 동의(선택)", isaFlag: false },
  ];

  const [agreeMap, setAgreeMap] = useState<Record<number, string>>({});

  const handleConfirm = () => {
    const notAgreed = agreeList.filter(
      (item) => item.isaFlag && agreeMap[item.no] !== "Y",
    );
    if (notAgreed.length > 0) {
      alert("필수 동의 항목에 모두 동의(Y)해야 합니다.");
      return;
    }

    const payload = agreeList.map((item) => ({
      agrNo: item.no,
      agrYn: agreeMap[item.no] || "N",
    }));
    console.log("[전문송신 mock] SM7903130001 →", JSON.stringify(payload));
    alert("동의서 저장 완료");
  };

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
        <button onClick={onClose}>닫기</button>
        <button onClick={handleConfirm}>확인</button>
        alert("동의서 저장 완료"); onClose();
      </div>
    </div>
  );
}

export default COMAGR001_00_00DG;
