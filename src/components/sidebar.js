import React from "react";
import { Helmet } from "react-helmet";
// import $ from 'jquery';
class Sidebar extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Blink! | Digital Wallet for Students</title>
        </Helmet>

        <div className="vertical-menu">
          <div data-simplebar className="h-100">
            <div id="sidebar-menu">
              <ul className="metismenu list-unstyled" id="side-menu">
                <li className="menu-title d-none" key="t-menu">
                  Muigai Commercial Agencies
                </li>

                <li>
                  <a href="index.html" className="waves-effect">
                    <i className="bx bx-home-circle"></i>
                    <span>Dashboards</span>
                  </a>
                </li>
                <li>
                  <a href="landlord.html" className="waves-effect">
                    <i className="mdi mdi-shield-home"></i>
                    <span>Landlord</span>
                  </a>
                </li>

                <li>
                  <a
                    href="javascript: void(0);"
                    className="waves-effect has-arrow"
                  >
                    <i className="mdi mdi-office-building-outline"></i>
                    <span>Premises</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li>
                      <a href="property-list.html">Premises Register</a>
                    </li>
                    <li>
                      <a href="property-new.html">Add a premises</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="javascript: void(0);"
                    className="waves-effect has-arrow"
                  >
                    <i className="mdi mdi-account-key"></i>
                    <span>Tenants</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li>
                      <a href="tenant-list.html">All Tenants</a>
                    </li>
                    <li>
                      <a href="tenant-compliant.html">Compliant tenants</a>
                    </li>
                    <li>
                      <a href="tenant-uncompliant.html">Uncompliant tenants</a>
                    </li>
                    <li>
                      <a href="tenant-distress.html">Tenants under distress</a>
                    </li>
                    <li>
                      <a href="tenant-new-month.html">New tenants report</a>
                    </li>
                    <li>
                      <a href="tenant-new.html">Add a tenant</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="javascript: void(0);"
                    className="waves-effect has-arrow"
                  >
                    <i className="bx bxs-lock-alt"></i>
                    <span>Auctioneers</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li>
                      <a href="auctioneers-list.html">All Auctioneers</a>
                    </li>
                    <li>
                      <a href="auctioneers-new.html">Add an auctioneer</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="javascript: void(0);"
                    className="waves-effect has-arrow"
                  >
                    <i className="mdi mdi-cog-outline"></i>
                    <span>Set ups</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li>
                      <a href="applicable-charges.html">Applicable Charges</a>
                    </li>
                    <li>
                      <a href="estates.htm">Estate</a>
                    </li>
                    <li>
                      <a href="house-types.html">House types</a>
                    </li>
                    <li>
                      <a href="zones.html">Zones</a>
                    </li>
                    <li>
                      <a href="attachables.html">Attachable Documents</a>
                    </li>
                    <li>
                      <a href="roles.html">Roles and Permissions</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="javascript: void(0);"
                    className="waves-effect has-arrow"
                  >
                    <i className="dripicons-flag"></i>
                    <span className="badge rounded-pill bg-danger float-end">
                      10
                    </span>
                    <span>Action Center</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li>
                      <a href="action-landlord-payments.html">
                        Landlord Remunerations
                      </a>
                    </li>
                    <li>
                      <a href="action-payments.html">Flagged payments</a>
                    </li>
                    <li>
                      <a href="action-agreements.html">
                        Tenancy agreements to be renewed
                      </a>
                    </li>
                    <li>
                      <a href="action-notice.html">Tenants on notice</a>
                    </li>
                    <li>
                      <a href="action-distress-timelines.html">
                        Distress timelines
                      </a>
                    </li>
                    <li>
                      <a href="action-auction-payment.html">Auction invoices</a>
                    </li>
                    {/* <!-- <li><a href="action-distress-timelines.html">Due distress timelines</a></li> --> */}
                  </ul>
                </li>

                <li>
                  <a
                    href="javascript: void(0);"
                    className="waves-effect has-arrow"
                  >
                    <i className="bx bx-chat"></i>
                    <span>Messenger</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li className="d-none">
                      <a href="messages.html">Compose messages</a>
                    </li>
                    <li>
                      <a href="messages.html">Messages</a>
                    </li>
                    <li>
                      <a href="messages-contacts.html">Contacts</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="javascript: void(0);"
                    className="waves-effect has-arrow"
                  >
                    <i className="bx bx-receipt"></i>
                    <span>Invoices</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li>
                      <a href="invoice-new.html">Create an Invoice</a>
                    </li>
                    <li>
                      <a href="invoice-rent.html">Rent & Bills Invoices</a>
                    </li>
                    <li>
                      <a href="invoice-other.html">Other Invoices</a>
                    </li>
                    <li className="d-none">
                      <a href="invoice-unpaid.html">Unpaid invoices</a>
                    </li>
                    <li className="d-none">
                      <a href="invoice-partial.html">Partially paid</a>
                    </li>
                    <li className="d-none">
                      <a href="invoice-paid.html">Cleared Invoices</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="javascript: void(0);"
                    className="waves-effect has-arrow"
                  >
                    <i className="mdi mdi-cash-remove"></i>
                    <span>Credit & Debit Notes</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li>
                      <a href="credit-note-new.html">Create Credit Note</a>
                    </li>
                    <li>
                      <a href="debit-note-new.html">Create Debit Note</a>
                    </li>
                    <li>
                      <a href="credit-notes.html">All Credit Notes</a>
                    </li>
                    <li>
                      <a href="debit-notes.html">All Debit Notes</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="javascript: void(0);"
                    className="waves-effect has-arrow"
                  >
                    <i className="bx bx-calculator"></i>
                    <span>Statements</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li className="d-none">
                      <a href="statements-tenant-schedule.html">
                        Tenant Schedule
                      </a>
                    </li>
                    <li>
                      <a href="statements-tenant-statements.html">
                        Tenant Statements
                      </a>
                    </li>
                    <li>
                      <a href="statements-landlord-schedule.html">
                        Landlord Schedule
                      </a>
                    </li>
                    <li>
                      <a href="statements-landlord-statements-.html">
                        Landlord Statements
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="javascript: void(0);"
                    className="waves-effect has-arrow text-capitalize"
                  >
                    <i className="mdi mdi-file-document-multiple-outline"></i>
                    <span>Reports</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li>
                      <a href="reports-daily.html">Daily Summary</a>
                    </li>
                    <li>
                      <a href="reports-account.html">Account Distribution</a>
                    </li>
                    <li>
                      <a href="reports-monthly.html">Monthly Rent Reports</a>
                    </li>
                    <li>
                      <a href="reports-revenue.html">Generated revenue</a>
                    </li>
                    <li>
                      <a href="reports-house.html">Collection By house type</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="receipts.html" className="waves-effect">
                    <i className="mdi mdi-receipt"></i>
                    <span>Receipts</span>
                  </a>
                </li>

                <li>
                  <a href="trasactions.html" className="waves-effect">
                    <i className="mdi mdi-cash-multiple"></i>
                    <span>Transactions</span>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript: void(0);"
                    className="waves-effect has-arrow"
                  >
                    <i className="mdi mdi-shield-account-outline"></i>
                    <span>System Users</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li>
                      <a href="admin-list.html">Admins list</a>
                    </li>
                    <li>
                      <a href="admin-new.html">Add an admin</a>
                    </li>
                  </ul>
                </li>

                <li className="menu-title d-none" key="t-apps">
                  Reports
                </li>

                <li className="d-none">
                  <a
                    href="javascript: void(0);"
                    className="waves-effect has-arrow"
                  >
                    <i className="mdi mdi-account-cash-outline"></i>
                    <span>Tenants Reports</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li>
                      <a href="#">Compliant Tenants</a>
                    </li>
                    <li>
                      <a href="#">Tenants on Notice</a>
                    </li>
                    <li>
                      <a href="#">With arrears</a>
                    </li>
                    <li>
                      <a href="#">Reported to auctioneers</a>
                    </li>
                  </ul>
                </li>

                <li className="d-none">
                  <a
                    href="javascript: void(0);"
                    className="waves-effect has-arrow"
                  >
                    <i className="mdi mdi-home-city-outline"></i>
                    <span>Property Reports</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li>
                      <a href="#">Vacant Units</a>
                    </li>
                    <li>
                      <a href="#">Occupancy report</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Sidebar;
