from docxtpl import DocxTemplate

doc = DocxTemplate("/contract.docx")

context = {
    'fullNameEng': 'kaeittisak seedaeng',
    'Address': '39/9 หมู่4 ถนนเพชรเกษม แขวงหลักสอง เขตบางแค กรุงเทพฯ 10160',
    'personal_id': '65823688236',
    'Contract_Consultant_Name': 'Mr. Ma noch',
    'Contract_Duration': '2023-06-09',
    'client': 'kaeittisak seedaeng',
    'Work_address': '39/9 หมู่4 ถนนเพชรเกษม แขวงหลักสอง เขตบางแค กรุงเทพฯ 10160',
    'Salary': '35,0000',
    'Agreement_expiration_period': '12',
    'Leave_eligibility': '6'
}

doc.render(context)
doc.save("/output.docx")


# ติดตั้ง pip3 install docxtpl
# pip3 install --upgrade pip
# python python.py