export enum ContactGroup {
	Client = "C",
	Partner = "P",
	Employee = "U",
	Investor = "I",
	Vendor = "V",
}

export enum GroupByPeriod {
	Daily = "Daily",
	Weekly = "Weekly",
	Monthly = "Monthly",
	Quarterly = "Quarterly",
	Yearly = "Yearly",
}

export enum InvoiceStatus {
	Draft = "Draft",
	Final = "Final",
	Sent = "Sent",
	Paid = "Paid",
	Canceled = "Canceled",
	PartiallyPaid = "PartiallyPaid",
	Refunded = "Refunded",
}

export enum AppFeatures {
	Admin = "Admin",
	AdminAdvanced = "Admin.Advanced",
	AdminCustomizations = "Admin.Customizations",
	AdvancedProfiles = "AdvancedProfiles",
	API = "API",
	AppChatFeature = "App.ChatFeature",
	AppChatFeatureTenantToHost = "App.ChatFeature.TenantToHost",
	AppChatFeatureTenantToTenant = "App.ChatFeature.TenantToTenant",
	AppMaxUserCount = "App.MaxUserCount",
	AutomateHub = "AutomateHub",
	CFO = "CFO",
	CFOBudgets = "CFO.Budgets",
	CFODepartmentsManagement = "CFO.DepartmentsManagement",
	CFOFinancialAccountMaxCount = "CFO.FinancialAccountMaxCount",
	CFOFutureForecastsYearCount = "CFO.FutureForecastsYearCount",
	CFOMaxUserCount = "CFO.MaxUserCount",
	CFOMaxUserInstanceCount = "CFO.MaxUserInstanceCount",
	CFOPartner = "CFO.Partner",
	CRM = "CRM",
	CRMBANKCode = "CRM.BANKCode",
	CRMChromeExtension = "CRM.ChromeExtension",
	CRMCommissions = "CRM.Commissions",
	CRMInvoicesManagement = "CRM.InvoicesManagement",
	CRMMaxActiveContactCount = "CRM.MaxActiveContactCount",
	CRMMaxActivePartnerCount = "CRM.MaxActivePartnerCount",
	CRMMaxChecklistPointCount = "CRM.MaxChecklistPointCount",
	CRMMaxCommunicationMessageCount = "CRM.MaxCommunicationMessageCount",
	CRMMaxProductCount = "CRM.MaxProductCount",
	CRMMaxUserCount = "CRM.MaxUserCount",
	CRMPayments = "CRM.Payments",
	CRMSalesTalk = "CRM.SalesTalk",
	CRMSubscriptionManagementSystem = "CRM.SubscriptionManagementSystem",
	CRMWooCommerceSynchronization = "CRM.WooCommerceSynchronization",
	HUB = "HUB",
	InboundOutboundSMS = "InboundOutboundSMS",
	MaxSpaceGB = "MaxSpaceGB",
	Notification = "Notification",
	PFM = "PFM",
	PFMApplications = "PFM.Applications",
	PFMCreditReport = "PFM.CreditReport",
	PFMMaxUserCount = "PFM.MaxUserCount",
	Portal = "Portal",
	PortalDashboard = "Portal.Dashboard",
	PortalInvoices = "Portal.Invoices",
	PortalLeads = "Portal.Leads",
	PortalReseller = "Portal.Reseller",
}