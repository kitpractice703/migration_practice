import { useState } from "react";
import COMAGR001_00_00DG from "../publish/COMAGR001_00_00DG";

function SavingsApplyPage() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: 40 }}>
      <h1>적금 신청 (임시 부모 확인)</h1>
      <button onClick={() => setOpen(true)}>동의서등록 열기</button>
      {open && <COMAGR001_00_00DG onClose={() => setOpen(false)} />}
    </div>
  );
}

export default SavingsApplyPage;
