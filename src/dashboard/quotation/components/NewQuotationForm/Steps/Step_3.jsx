export const Step_3 = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: 24, fontFamily: 'Arial, sans-serif', border: '1px solid black' }}>
      {/* Título */}
      <h1 style={{ textAlign: 'center', borderBottom: '1px solid black', paddingBottom: 16, marginBottom: 32 }}>견&nbsp;&nbsp;적&nbsp;&nbsp;서</h1>

      {/* Encabezado de fecha y destinatario */}
      <div style={{ marginBottom: 24 }}>
        <p><strong>2025년 03월 18일</strong></p>
        <p><strong>화원평광아파트 귀하</strong></p>
        <p>아래와 같이 견적합니다.</p>
      </div>

      {/* Información del proveedor */}
      <table
        border="1"
        cellPadding="6"
        style={{
          borderCollapse: 'collapse',
          float: 'right',
          marginBottom: 32,
          fontSize: 14,
          width: '300px',
        }}
      >
        <tbody>
          <tr>
            <td>공급자 등록번호</td>
            <td>503-18-35279</td>
          </tr>
          <tr>
            <td>상호</td>
            <td>장수샷시유리</td>
          </tr>
          <tr>
            <td>성명</td>
            <td>장수철</td>
          </tr>
          <tr>
            <td>사업장 소재지</td>
            <td>대구광역시 달서구 장기로 180-72</td>
          </tr>
          <tr>
            <td>업태</td>
            <td>건설</td>
          </tr>
          <tr>
            <td>종목</td>
            <td>창호공사</td>
          </tr>
          <tr>
            <td>전화</td>
            <td>010-9214-0349</td>
          </tr>
        </tbody>
      </table>

      {/* Limpiar float */}
      <div style={{ clear: 'both' }} />

      {/* Tabla principal */}
      <table
        border="1"
        cellSpacing="0"
        cellPadding="8"
        style={{
          borderCollapse: 'collapse',
          width: '100%',
          fontSize: 14,
          marginBottom: 24
        }}
      >
        <thead>
          <tr>
            <th colSpan="7" style={{ textAlign: 'left' }}>
              합계 금액 (일천팔십오만칠천원정)<br />
              옥상스텐사다리, 등반이제작설치
            </th>
          </tr>
          <tr>
            <th>품목</th>
            <th>규격</th>
            <th>수량</th>
            <th>단가</th>
            <th>공급가액</th>
            <th>세액</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>스텐사다리</td>
            <td>2m</td>
            <td>6ea</td>
            <td>450,000</td>
            <td>2,700,000</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>스텐등받이</td>
            <td>1.9m</td>
            <td>6ea</td>
            <td>550,000</td>
            <td>3,300,000</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>부자재및경비</td>
            <td>1식</td>
            <td></td>
            <td>370,000</td>
            <td>370,000</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>장비대</td>
            <td>2일</td>
            <td></td>
            <td>600,000</td>
            <td>1,200,000</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>설치비용</td>
            <td>3명2일</td>
            <td></td>
            <td>800,000</td>
            <td>1,600,000</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>보험료</td>
            <td>1식</td>
            <td></td>
            <td>220,000</td>
            <td>220,000</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>발판</td>
            <td>6ea</td>
            <td></td>
            <td>80,000</td>
            <td>480,000</td>
            <td></td>
            <td></td>
          </tr>

          {/* Filas vacías */}
          {[...Array(4)].map((_, i) => (
            <tr key={i}><td colSpan="7" style={{ height: 24 }}></td></tr>
          ))}

          {/* Totales */}
          <tr>
            <td colSpan="4" style={{ textAlign: 'right', fontWeight: 'bold' }}>합계</td>
            <td>9,870,000</td>
            <td>987,000</td>
            <td></td>
          </tr>
          <tr>
            <td colSpan="7"><strong>영업안내</strong> &nbsp;&nbsp;&nbsp;&nbsp; 총금액 : 10,857,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
