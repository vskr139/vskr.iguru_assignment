let mainContainerElement = document.getElementById("mainContainer");

let marksheetMainContainer = document.createElement("div");

mainContainerElement.appendChild(marksheetMainContainer);

function creatingDetailsOfSchool (lstStudentInfo) {
    const {SchoolName, SchoolAddress, SchoolPhoneNumber, SchoolEmail} = lstStudentInfo[0];
    let schoolDetailsContainer = document.createElement("div");
    schoolDetailsContainer.classList.add("school-details-container");

    marksheetMainContainer.appendChild(schoolDetailsContainer);


    let schoolLogoElement = document.createElement("img");
    schoolLogoElement.src = "https://davbundu.org/wp-content/uploads/2020/03/cropped-dav-bundu.png";
    schoolLogoElement.classList.add("school-logo")

    schoolDetailsContainer.appendChild(schoolLogoElement);

    let schoolDetailsTextContainer = document.createElement("div");
    schoolDetailsTextContainer.classList.add("school-details-text-container");

    schoolDetailsContainer.appendChild(schoolDetailsTextContainer);

    let schoolNameElement = document.createElement("h1");
    schoolNameElement.textContent = SchoolName;
    schoolNameElement.classList.add("school-name");

    schoolDetailsTextContainer.appendChild(schoolNameElement);

    let schoolAddressContainer = document.createElement("div")
    schoolAddressContainer.classList.add("school-address-container")

    schoolDetailsTextContainer.appendChild(schoolAddressContainer);

    let schoolAddressElement = document.createElement("span");
    schoolAddressElement.textContent = SchoolAddress;
    schoolAddressElement.classList.add("school-address");

    schoolAddressContainer.appendChild(schoolAddressElement);

    let schoolPhoneNoElement = document.createElement("span");
    schoolPhoneNoElement.textContent = ", Ph: " + SchoolPhoneNumber;
    schoolPhoneNoElement.classList.add("school-address");

    schoolAddressContainer.appendChild(schoolPhoneNoElement);

    let schoolEmailElement = document.createElement("p");
    schoolEmailElement.textContent = "Visit Us at: " + SchoolEmail;
    schoolEmailElement.classList.add("school-address", "school-email");
    schoolDetailsTextContainer.appendChild(schoolEmailElement);

    let reportCardHeadingElement = document.createElement("p");
    reportCardHeadingElement.textContent = "REPORT CARD";
    reportCardHeadingElement.classList.add("report-card-heading")

    marksheetMainContainer.appendChild(reportCardHeadingElement);

    let academicSessionHeadingElement = document.createElement("p");
    academicSessionHeadingElement.textContent = "ACADAMIC SESSION: 2022 - 2023";
    academicSessionHeadingElement.classList.add("report-card-heading")

    marksheetMainContainer.appendChild(academicSessionHeadingElement);

    let horizontalLineElement = document.createElement("hr");
    horizontalLineElement.classList.add("horizontal-line");
    
    marksheetMainContainer.appendChild(horizontalLineElement);
}

function creatingStudentDetails (lstStudentInfo){
    const {RollNumber, FatherName, ClassName, Name, MotherName, DOB, StudentID} = lstStudentInfo[0];
    let studentDetails = [["Scholar No", StudentID], ["Class", ClassName], ["Roll No", RollNumber], ["Name of Student", Name], ["Father's name", FatherName], ["Mother's Name", MotherName], ["Attendance", ""], ["Date of Birth", DOB]];
    let studentDetailsContainer = document.createElement("ul");
    studentDetailsContainer.classList.add("student-details-container")

    marksheetMainContainer.appendChild(studentDetailsContainer);

    studentDetails.map((each) => {
        let studentDetailItem = document.createElement("li");
        studentDetailItem.classList.add("student-detail-item");

        studentDetailsContainer.appendChild(studentDetailItem);

        let studentDetailItemPropertyContainer = document.createElement("div");
        studentDetailItemPropertyContainer.classList.add("student-detail-item-property-container");

        studentDetailItem.appendChild(studentDetailItemPropertyContainer);


        let studentDetailProperty = document.createElement("p");
        studentDetailProperty.classList.add("student-detail-item-property")
        studentDetailProperty.textContent = each[0]

        studentDetailItemPropertyContainer.appendChild(studentDetailProperty);

        let studentDetailItemValueContainer = document.createElement("div");
        studentDetailItemValueContainer.classList.add("student-detail-item-value");

        studentDetailItem.appendChild(studentDetailItemValueContainer);

        let studentDetailValue = document.createElement("p");
        studentDetailValue.classList.add("student-detail-item-value-container")
        studentDetailValue.textContent = ":-  " + each[1]

        studentDetailItemValueContainer.appendChild(studentDetailValue);

    })
}




const getData = async () => {
    const response = await fetch("http://stageapi.iguru.guru:222/api/ExamManagement/GetStudentProgressReports?schoolID=282&sectionID=2682&eXamMasID=8442&students=181521")
    const jsonData = await response.json()
    console.log(jsonData);
    const {Response} = jsonData
    const {ProgressList} = Response 
    const {ExamMasters, lstInternal, lstStudentInfo, stGrades} = ProgressList;
    creatingDetailsOfSchool(lstStudentInfo);
    creatingStudentDetails(lstStudentInfo);
    
}
getData();















