import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

import * as auth from "../app/modules/auth/_redux/authRedux";
import { ManageUserSlice } from "../app/modules/user-management/users-list/_redux/userSlice";
import { LeadSlice } from "../app/modules/leads/leads-list/_redux/leadSlice";
import { TargetSlice } from "../app/modules/Targets/Target-list/_redux/targetSlice";
import { TicketSlice } from "../app/modules/Tickets/Ticket-list/_redux/ticketSlice";
import { ManageTaskSlice } from "../app/modules/task/tasks-list/_redux/taskSlice";
import { ContactSlice } from "../app/modules/Contact/contacts-list/_redux/contactSlice";
import { BookingSlice } from "../app/modules/booking/bookings-list/_redux/bookingSlice";
import { dealsSlice } from "../app/modules/deal/deals-list/_redux/dealSlice";
// import { bookingSlice } from "../app/modules/booking/bookings-list/_redux/bookingSlice";

// import { dashboardSlice } from "../app/modules/DashboardAPI/dashboardSlice";

// import { manageUsersSlice } from "../app/modules/Users/_redux/manageUsers/manageUsersSlice";
// import { manageVerificationRequestsSlice } from "../app/modules/Users/_redux/manageVerificationRequests/manageVerificationRequestsSlice";
// import { manageCategoriesSlice } from "../app/modules/Categories/_redux/manageCategorie/manageCategoriesSlice";
// import { manageSubCategoriesSlice } from "../app/modules/Categories/_redux/manageSubCategorie/manageSubCategoriesSlice";
// import { mediaSlice } from "../app/modules/Media/_redux/media/mediaSlice";
// import { earningsSlice } from "../app/modules/Earnings/_redux/earning/earningsSlice";
// import { blogSlice } from "../app/modules/Blog/_redux/blog/blogSlice";
// import { branchwisetestSlice } from "../app/modules/Branchwisetest/_redux/branchwisetest/branchwisetestSlice";
// import { fileSlice } from "../app/modules/File/_redux/file/fileSlice";
// import { bookSlice } from "../app/modules/Book/_redux/book/bookSlice";
// import { resourceSlice } from "../app/modules/Resource/_redux/resource/resourceSlice";
// import { offlineAdmissionsSlice } from "../app/modules/Admissions/_redux/offlineAdmission/offlineAdmissionSlice";
// import { onlineAdmissionsSlice } from "../app/modules/Admissions/_redux/onlineAdmission/onlineAdmissionSlice";
// import { diagnosticSlice } from "../app/modules/Diagnostic/_redux/diagnostic/diagnosticSlice";
// import { courseSlice } from "../app/modules/Course/_redux/course/courseSlice";
// import { currentaffairSlice } from "../app/modules/Currentaffairs/_redux/currentaffair/currentaffairSlice";
// import { syllabusSlice } from "../app/modules/Syllabus/_redux/syllabus/syllabusSlice";
// import { paymentSlice } from "../app/modules/Payment/_redux/payment/paymentSlice";
// import { mainsQuestionsSlice } from "../app/modules/Mains/_redux/mainsQuestion/mainsQuestionsSlice";
// import { mainsQuestionPapersSlice } from "../app/modules/Mains/_redux/mainsQuestionPaper/mainsQuestionPapersSlice";
// import { quizsSlice } from "../app/modules/Quizzes/_redux/quiz/quizsSlice";
// import { quizQuestionsSlice } from "../app/modules/Quizzes/_redux/quizQuestion/quizQuestionsSlice";
// import { orderSlice } from "../app/modules/Orders/_redux/order/orderSlice";
// import { scoreSlice } from "../app/modules/Scores/_redux/score/scoreSlice";
// import { packageSlice } from "../app/modules/Packages/_redux/package/packageSlice";
// import { noteSlice } from "../app/modules/Notes/_redux/note/noteSlice";
// import { testSlice } from "../app/modules/Test/_redux/test/testSlice";
// import { testReportSlice } from "../app/modules/TestReport/_redux/testReport/testReportSlice";
// import { branchSlice } from "../app/modules/Branches/_redux/branch/branchSlice";
// import { patientSlice } from "../app/modules/Patients/_redux/patient/patientSlice";
// import { corporateSlice } from "../app/modules/Corporate/_redux/corporate/corporateSlice";
// import { locationSlice } from "../app/modules/Locations/_redux/location/locationSlice";
// import { staffSlice } from "../app/modules/Staffs/_redux/staff/staffSlice";
// import { careerSlice } from "../app/modules/Careers/_redux/career/careerSlice";
// import { invoiceSlice } from "../app/modules/Invoices/_redux/invoice/invoiceSlice";
// import { testimonialsSlice } from "../app/modules/Testimonials/_redux/testimonials/testimonialsSlice";
// import { appointmentSlice } from "../app/modules/Appointment/_redux/appointment/appointmentSlice";
// import { aboutusSlice } from "../app/modules/Aboutus/_redux/aboutus/aboutusSlice";
// import { contactusSlice } from "../app/modules/Contactus/_redux/contactus/contactusSlice";
// import { subscriberSlice } from "../app/modules/Subscriber/_redux/subscriber/subscriberSlice";
// import { healthscanSlice } from "../app/modules/Healthscans/_redux/healthscan/healthscanSlice";
// import { doctorSlice } from "../app/modules/Doctor/_redux/doctor/doctorSlice";

export const rootReducer = combineReducers({
  auth: auth.reducer,
  ManageUserData: ManageUserSlice.reducer,
  ManageTaskData: ManageTaskSlice.reducer,
  LeadData: LeadSlice.reducer,
  TargetData:TargetSlice.reducer,
  TicketData:TicketSlice.reducer,
  ContactData:ContactSlice.reducer,
  booking:BookingSlice.reducer,
  deal:dealsSlice.reducer
  // dashboardData: dashboardSlice.reducer,
  // manageUsers: manageUsersSlice.reducer,
  // manageVerificationRequests: manageVerificationRequestsSlice.reducer,
  // manageCategories: manageCategoriesSlice.reducer,
  // manageSubCategories: manageSubCategoriesSlice.reducer,
  // earnings: earningsSlice.reducer,
  // media: mediaSlice.reducer,
  // blog: blogSlice.reducer,
  // branchwisetest: branchwisetestSlice.reducer,
  // file: fileSlice.reducer,
  // book: bookSlice.reducer,
  // resource: resourceSlice.reducer,
  // offlineAdmissions: offlineAdmissionsSlice.reducer,
  // onlineAdmission: onlineAdmissionsSlice.reducer,
  // diagnostic: diagnosticSlice.reducer,
  // healthscan: healthscanSlice.reducer,
  // course: courseSlice.reducer,
  // currentaffair: currentaffairSlice.reducer,
  // syllabus: syllabusSlice.reducer,
  // payment: paymentSlice.reducer,
  // mainsQuestions: mainsQuestionsSlice.reducer,
  // mainsQuestionPapers: mainsQuestionPapersSlice.reducer,
  // quizs: quizsSlice.reducer,
  // quizQuestions: quizQuestionsSlice.reducer,
  // orders: orderSlice.reducer,
  // branchs: branchSlice.reducer,
  // patients: patientSlice.reducer,
  // corporates: corporateSlice.reducer,
  // scores: scoreSlice.reducer,
  // packages: packageSlice.reducer,
  // notes: noteSlice.reducer,
  // test: testSlice.reducer,
  // testReport: testReportSlice.reducer,
  // locations: locationSlice.reducer,
  // staff: staffSlice.reducer,
  // career: careerSlice.reducer,
  // aboutus: aboutusSlice.reducer,
  // contactus: contactusSlice.reducer,
  // invoice: invoiceSlice.reducer,
  // appointment: appointmentSlice.reducer,
  // testimonials: testimonialsSlice.reducer,
  // subscriber: subscriberSlice.reducer,
  // doctor: doctorSlice.reducer,
});

export function* rootSaga() {
  yield all([auth.saga()]);
}
