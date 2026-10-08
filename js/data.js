/**
 * ALI FEKRY MOHAMED - PORTFOLIO DATA REPOSITORY
 * Strictly adhering to provided CV data without invented credentials or fake statistics.
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "Ali Fekry Mohamed",
    title: "Junior SOC Analyst | Cybersecurity Analyst",
    location: "Heliopolis, Cairo, Egypt",
    email: "aly.fekry10@gmail.com",
    phone: "01274872104",
    linkedin: "https://www.linkedin.com/in/ali-fekry",
    github: "https://github.com/Ali-Fekry",
    resumeUrl: "./assets/Ali_Fekry_SOC_Analyst_CV.pdf",
    statusBadge: "Available for SOC Tier 1 / Blue Team Roles",
    focus: "Defending systems through security monitoring, threat detection, incident investigation, and blue-team operations.",
    targetRoles: [
      "Junior SOC Analyst",
      "SOC Analyst Tier 1",
      "Cybersecurity Analyst",
      "Security Operations",
      "Blue Team Specialist"
    ]
  },

  summary: {
    core: "Junior SOC Analyst with a strong foundation in Security Operations, networking, Windows/Active Directory, threat detection, and incident investigation. Knowledgeable in SIEM, EDR/NDR/XDR, IDS/IPS, DNS security, phishing analysis, authentication attacks, and incident response. Familiar with MITRE ATT&CK and Cyber Kill Chain frameworks, with hands-on experience through SOC labs and security simulations. Seeking an entry-level SOC/Cybersecurity role in a blue-team environment.",
    centralMessage: "Engineer with a strong networking foundation who is building a career in Security Operations, threat detection, incident investigation, and blue-team cybersecurity.",
    engineeringBridge: "Graduated with a Bachelor's Degree in Electronics & Communication Engineering (MIU, GPA 3.18, Grad Project Grade A). This provides a rigorous analytical foundation in network architectures, signaling, packet flows, embedded systems, and methodical engineering troubleshooting directly applied to defensive security monitoring."
  },

  education: {
    degree: "Bachelor's Degree – Electronics & Communication Engineering",
    institution: "MIU (Misr International University)",
    gradProjectGrade: "A",
    gpa: "3.18",
    highlights: [
      "Graduation Project Grade: A demonstrating complex technical execution and system design.",
      "GPA: 3.18 reflecting consistent academic rigor in engineering sciences.",
      "Hardware, signaling, and telecommunications background provides deep comprehension of lower-layer OSI/TCP models, protocol encapsulation, and system-level telemetry."
    ]
  },

  languages: [
    { name: "Arabic", level: "Native", desc: "First language / Native proficiency" },
    { name: "English", level: "Excellent", desc: "Professional working & technical fluency" },
    { name: "French", level: "Basics", desc: "Elementary conversational & reading foundation" }
  ],

  socDashboard: {
    notice: "PORTFOLIO VISUALIZATION / SIMULATED SOC ENVIRONMENT",
    systemStatus: "OPERATIONAL",
    uptime: "99.98%",
    activeSensors: "EDR • NDR • IDS/IPS • SIEM",
    stats: {
      totalAlerts: 12,
      critical: 1,
      high: 3,
      investigating: 4,
      resolved: 4
    },
    alerts: [
      {
        id: "ALT-2026-104",
        threat: "PHISHING DETECTED",
        severity: "HIGH",
        status: "Investigating",
        source: "Mail Gateway / Header Analyzer",
        timestamp: "12m ago",
        ioc: "SPF/DKIM SoftFail • Macro attachment (.docm) • Target: Finance Group",
        summary: "Inbound email flagged with spoofed display name and mismatched Return-Path. Contains an embedded macro payload and external URL redirection.",
        mitre: "T1566.001 - Spearphishing Attachment",
        logSnippet: "MSG_ID: <4892@corp-spoof.net>\nFROM: \"Executive Support\" <it-support@cloud-update-domain.top>\nAUTH: SPF=Softfail, DKIM=neutral, DMARC=fail\nATTACHMENT: invoice_urgent_q3.docm (Hash: e3b0c44298fc...)\nACTION_TAKEN: Quarantined at gateway, pending analyst confirmation",
        investigationSteps: [
          "1. Extracted email headers to verify Return-Path vs From mismatch.",
          "2. Evaluated SPF, DKIM, and DMARC authentication breakdown.",
          "3. Extracted embedded URL and submitted attachment hash for threat reputation.",
          "4. Checked mail server logs for recipient scope across internal mailboxes."
        ],
        containment: "Quarantined email across mailboxes, submitted sender domain to perimeter firewall blocklist, notified targeted user."
      },
      {
        id: "ALT-2026-102",
        threat: "BRUTE FORCE ATTEMPT",
        severity: "MEDIUM",
        status: "Resolved",
        source: "Auth Server / Active Directory",
        timestamp: "38m ago",
        ioc: "Event ID 4625 spike • 140 failed attempts in 2m • Target: srv_admin",
        summary: "Rapid consecutive failed authentication events targeting privileged domain accounts from a single internal subnet workstation.",
        mitre: "T1110.001 - Password Guessing",
        logSnippet: "EventCode: 4625 (An account failed to log on)\nAccount Name: srv_admin\nFailure Reason: %%2313 (Unknown user name or bad password)\nWorkstation Name: WS-FIN-09\nSource Network Address: 192.168.10.45\nFrequency: 140 events in 120 seconds",
        investigationSteps: [
          "1. Filtered Windows Security Event logs for Event ID 4625 and 4624.",
          "2. Correlated source IP 192.168.10.45 with DHCP lease and endpoint hostname.",
          "3. Verified account lockout policy enforcement on target account.",
          "4. Confirmed no successful 4624 logon event followed the failed burst."
        ],
        containment: "Account temporarily locked per policy. Host WS-FIN-09 isolated for malware triage. IP address restricted."
      },
      {
        id: "ALT-2026-098",
        threat: "SUSPICIOUS DNS ACTIVITY",
        severity: "HIGH",
        status: "Investigating",
        source: "Core DNS / NDR Sensor",
        timestamp: "1h 14m ago",
        ioc: "DGA Domain Queries • High-entropy TXT records • Tunneling pattern",
        summary: "Repetitive anomalous DNS query patterns to pseudorandom subdomains with oversized TXT record payload responses indicating potential data staging or C2 beacon.",
        mitre: "T1071.004 - DNS Application Layer Protocol",
        logSnippet: "Query: v8x9q2m1.exfil-stream.cx\nQuery Type: TXT\nResponse Size: 512 bytes (High Entropy Base64)\nQuery Cadence: Jittered every 15s (+/- 2s)\nRequesting Host: 10.0.4.88",
        investigationSteps: [
          "1. Inspected DNS server query logs for entropy and character frequency.",
          "2. Wireshark PCAP inspection of TXT record payload structure.",
          "3. Correlated endpoint 10.0.4.88 network traffic with running processes.",
          "4. Checked domain reputation and registration age (< 48 hours old)."
        ],
        containment: "Blackholed / Sinkholed domain at internal resolver. Monitored for persistent reconnection attempts."
      },
      {
        id: "ALT-2026-091",
        threat: "POTENTIAL RANSOMWARE STAGER",
        severity: "CRITICAL",
        status: "Investigating",
        source: "EDR Sensor / Endpoint Telemetry",
        timestamp: "2h 05m ago",
        ioc: "vssadmin.exe shadowcopy deletion • Suspicious PowerShell encoded command",
        summary: "Endpoint security agent alerted on command execution attempting to delete volume shadow copies followed by high I/O file renaming activity.",
        mitre: "T1490 - Inhibit System Recovery",
        logSnippet: "Process: powershell.exe\nCommandLine: vssadmin.exe Delete Shadows /All /Quiet\nParentProcess: cmd.exe (Spawned from Word macro process)\nIntegrity Level: High\nTarget Host: WS-HR-03 (192.168.20.14)",
        investigationSteps: [
          "1. Reviewed process ancestry tree: WINWORD.EXE -> CMD.EXE -> POWERSHELL.EXE.",
          "2. Decoded Base64 PowerShell execution parameters.",
          "3. Verified file system telemetry for mass extension renaming attempts.",
          "4. Located dropped binary in user AppData\\Local\\Temp folder."
        ],
        containment: "Immediate host network isolation initiated via EDR. Terminated offending process branch and preserved memory dump for analysis."
      },
      {
        id: "ALT-2026-085",
        threat: "PORT SCAN / SYN FLOOD ANOMALY",
        severity: "MEDIUM",
        status: "Resolved",
        source: "Perimeter Firewall / IDS",
        timestamp: "3h 40m ago",
        ioc: "TCP SYN Flag Burst without ACK • Sequential Port Sweep • Source: Ext IP",
        summary: "External perimeter firewall reported excessive half-open TCP connections probing consecutive ports across public DMZ boundary.",
        mitre: "T1046 - Network Service Discovery",
        logSnippet: "FW_EVENT: DENY_TCP_SYN_FLOOD\nSource IP: 198.51.100.77 -> Dest IP: 203.0.113.10\nFlags: [S] Seq=0 Win=1024 Len=0\nPorts Targeted: 21, 22, 23, 80, 443, 3389, 8080\nRate: 450 pkts/sec",
        investigationSteps: [
          "1. Analyzed firewall drop logs and IDS signature alerts.",
          "2. Evaluated TCP handshake completion rate (0 completed sessions).",
          "3. Verified that no internal or DMZ services accepted inbound connections.",
          "4. Documented source IP geolocation and threat intelligence history."
        ],
        containment: "Added attacking IP to dynamic edge firewall drop table with 24-hour block duration."
      }
    ]
  },

  skills: {
    secOps: [
      { name: "SIEM", level: "Core", desc: "Centralized log ingestion, correlation rules & alert analysis" },
      { name: "Splunk", level: "Applied", desc: "Search processing (SPL), field extraction, correlation & dashboards" },
      { name: "QRadar", level: "Knowledge", desc: "Offense tracking, log source management & event correlation" },
      { name: "IDS / IPS", level: "Applied", desc: "Signature matching, network anomaly detection & packet analysis" },
      { name: "EDR", level: "Applied", desc: "Host-level process trees, telemetry inspection & host isolation" },
      { name: "NDR", level: "Applied", desc: "Network traffic analysis, anomaly detection & flow correlation" },
      { name: "XDR", level: "Knowledge", desc: "Cross-layered telemetry correlation across endpoints, network & identity" },
      { name: "Incident Response", level: "Core", desc: "Triage, containment, eradication, recovery & documentation" },
      { name: "Alert Triage", level: "Core", desc: "True positive vs. false positive validation & severity rating" },
      { name: "Log Analysis", level: "Core", desc: "Windows Security Events, Sysmon, Linux syslog, firewall logs" },
      { name: "Threat Detection", level: "Core", desc: "Identifying anomalous behaviors, attack patterns & IOC matches" }
    ],
    networking: [
      { name: "CCNA Knowledge", level: "Foundation", desc: "Cisco routing & switching architectures, enterprise topologies" },
      { name: "TCP/IP & OSI Model", level: "Core", desc: "Layered encapsulation, headers, flags & packet traversal" },
      { name: "TCP / UDP", level: "Core", desc: "Connection-oriented vs connectionless traffic, handshakes, flags" },
      { name: "DNS & DNS Security", level: "Core", desc: "Resolution flow, DNS tunneling detection, DGA queries, sinkholing" },
      { name: "DHCP", level: "Core", desc: "Dynamic addressing, lease tracking & host IP-to-MAC mapping" },
      { name: "HTTP / HTTPS", level: "Core", desc: "Web traffic inspection, status codes, request headers, TLS" },
      { name: "Routing & Switching", level: "Core", desc: "Packet forwarding, L2/L3 segmentation, default gateways" },
      { name: "VLANs", level: "Core", desc: "Broadcast domain isolation, network segmentation against lateral movement" },
      { name: "NAT & PAT", level: "Core", desc: "Network address translation, public/private IP boundary tracking" },
      { name: "VPN", level: "Core", desc: "Secure tunneling, remote access logging & authentication monitoring" },
      { name: "Firewalls", level: "Core", desc: "Stateful inspection, ingress/egress filtering, drop log analysis" },
      { name: "Wireshark", level: "Applied", desc: "PCAP deep packet inspection, stream reconstruction, protocol dissections" },
      { name: "Cisco Packet Tracer", level: "Applied", desc: "Network simulation, topology testing, routing & firewall verification" }
    ],
    threats: [
      { name: "Phishing", type: "Initial Access", desc: "Credential harvesting, malicious attachments, spoofed headers" },
      { name: "Brute Force", type: "Credential Access", desc: "Password guessing, credential stuffing, password spraying" },
      { name: "Ransomware", type: "Impact", desc: "File encryption behaviors, shadow copy deletion, process injection" },
      { name: "DoS / SYN Flood", type: "Availability", desc: "TCP half-open connection exhaustion, volumetric flood anomalies" },
      { name: "DNS Attacks", type: "C2 / Exfiltration", desc: "DNS tunneling, cache poisoning, domain spoofing, DGA lookups" },
      { name: "SQL Injection (SQLi)", type: "Application", desc: "Web application database manipulation attempts in HTTP logs" },
      { name: "Cross-Site Scripting (XSS)", type: "Application", desc: "Client-side script injection detection in web requests" }
    ],
    frameworks: [
      {
        name: "MITRE ATT&CK",
        focus: "Tactics, Techniques, and Procedures (TTPs)",
        desc: "Structured adversary behavior categorization used to map alerts, document attack paths, and validate defensive coverage."
      },
      {
        name: "Cyber Kill Chain",
        focus: "Phase-based Intrusion Analysis",
        desc: "Evaluating attacks from Reconnaissance and Weaponization through Delivery, Exploitation, Installation, C2, and Actions on Objectives."
      }
    ],
    tools: [
      {
        name: "Splunk",
        category: "SIEM & Security Analytics",
        useCase: "Log aggregation, SPL searching, correlation rules, security monitoring dashboards"
      },
      {
        name: "Wireshark",
        category: "Network Protocol Analysis",
        useCase: "Deep packet inspection, TCP stream reassembly, suspicious handshake & payload analysis"
      },
      {
        name: "Linux",
        category: "Operating System & CLI",
        useCase: "Command-line log triage (grep, awk, sed), file permission analysis, auth.log & syslog inspection"
      },
      {
        name: "Cisco Packet Tracer",
        category: "Network Topology Simulation",
        useCase: "Designing secure subnetworks, configuring ACLs, routing protocols, and VLAN segmentation"
      }
    ]
  },

  triageWorkflow: [
    {
      step: 1,
      name: "Alert Receipt",
      desc: "Trigger received from SIEM, EDR, NDR, or IDS/IPS based on rule threshold or anomaly detection.",
      action: "Capture alert metadata, source timestamp, asset identifier, and initial telemetry data."
    },
    {
      step: 2,
      name: "Validation",
      desc: "Determine if the event is a True Positive (genuine security event) or False Positive (benign activity).",
      action: "Check baseline host behavior, user role legitimacy, and known scheduled administrative tasks."
    },
    {
      step: 3,
      name: "Severity Assessment",
      desc: "Classify potential organizational impact (Low, Medium, High, Critical) based on asset criticality.",
      action: "Evaluate exposed data sensitivity, privileged account involvement, and blast radius."
    },
    {
      step: 4,
      name: "Deep Investigation",
      desc: "Correlate telemetry across multiple vectors: endpoint processes, network PCAPs, and authentication logs.",
      action: "Extract IOCs (hashes, IPs, domains), map actions to MITRE ATT&CK, and establish timeline."
    },
    {
      step: 5,
      name: "Prioritization",
      desc: "Rank incident in the SOC queue against active alerts to allocate prompt containment resources.",
      action: "Escalate to Tier 2 / Incident Response lead if active data exfiltration or lateral movement is observed."
    },
    {
      step: 6,
      name: "Containment",
      desc: "Apply rapid tactical actions to halt threat progression and isolate compromised assets.",
      action: "Network host isolation, temporary account lock, firewall IP blocking, and DNS sinkholing."
    },
    {
      step: 7,
      name: "Recovery & Review",
      desc: "Restore systems to normal operation and document lessons learned in incident report.",
      action: "Verify absence of persistence mechanisms, update detection signatures, and produce incident report."
    }
  ],

  handsOnLabs: [
    {
      id: "lab-phishing",
      title: "Phishing Email Investigation",
      badge: "Email Security & Header Analysis",
      description: "Hands-on investigation of simulated malicious emails. Analyzed indicators including senders, email headers, URLs, attachments, and authentication results.",
      workflow: [
        { label: "Header Extraction", text: "Inspected RFC 5322 headers, comparing 'From' display values against actual 'Return-Path' and 'Received-SPF' headers to identify spoofing." },
        { label: "Auth Validation", text: "Evaluated SPF (Sender Policy Framework), DKIM cryptographic signatures, and DMARC alignment pass/fail verdicts." },
        { label: "URL & Domain Analysis", text: "Safely defanged and evaluated suspicious links for domain age, typosquatting, and credential harvesting patterns." },
        { label: "Attachment Triage", text: "Extracted file hashes (MD5/SHA256) and examined for weaponized macro code (.docm/.xlsm) or obfuscated script extensions." },
        { label: "SOC Action", text: "Generated IOC documentation, quarantined related emails, and submitted malicious sender indicators for perimeter blocking." }
      ]
    },
    {
      id: "lab-auth-bruteforce",
      title: "Authentication & Brute-Force Investigation",
      badge: "Identity & Windows Event Logs",
      description: "Analyzed authentication logs to identify failed and successful login patterns, distinguish benign lockouts from password spraying, and investigate potential brute-force attacks.",
      workflow: [
        { label: "Event Log Parsing", text: "Filtered Windows Security Logs focusing on Event ID 4625 (Logon Failure) and Event ID 4624 (Successful Logon)." },
        { label: "Pattern Recognition", text: "Analyzed login frequency thresholds, sub-status codes (e.g. 0xC000006A - bad password vs 0xC0000064 - user does not exist), and source IP clustering." },
        { label: "Attack Classification", text: "Differentiated high-velocity single-account brute-force from horizontal multi-account password spraying attempts." },
        { label: "Corroboration", text: "Verified if any failed burst was immediately succeeded by a successful logon event (indicating potential compromise)." },
        { label: "SOC Action", text: "Enforced targeted account lockouts, identified infected internal source hosts, and recommended MFA policy enforcement." }
      ]
    },
    {
      id: "lab-ids-ndr",
      title: "IDS/NDR Network Alert Investigation",
      badge: "Network Traffic & Threat Correlation",
      description: "Investigated IDS/NDR alerts and correlated suspicious network activity with endpoint telemetry and authentication records to uncover adversary persistence.",
      workflow: [
        { label: "Alert Triage", text: "Reviewed Snort/Suricata style signature alerts and behavioral network anomaly warnings for anomalous protocol usage." },
        { label: "PCAP Packet Inspection", text: "Loaded captured network packets into Wireshark to reconstruct TCP conversations, follow streams, and inspect packet payloads." },
        { label: "Cross-Data Correlation", text: "Correlated network event timestamps with endpoint execution logs (Sysmon) and domain authentication to verify the source process." },
        { label: "Beaconing Detection", text: "Identified regular periodic or jittered outbound connections communicating with unclassified external IP addresses." },
        { label: "SOC Action", text: "Extracted remote C2 indicators, created firewall drop rules, and isolated the offending host for forensic triage." }
      ]
    },
    {
      id: "lab-mitre-mapping",
      title: "MITRE ATT&CK Investigation & Mapping",
      badge: "Framework Alignment & Documentation",
      description: "Applied MITRE ATT&CK techniques to simulated attack scenarios and systematically documented investigation findings to establish structured defense.",
      workflow: [
        { label: "Adversary TTP Mapping", text: "Mapped simulated attacker behaviors to standardized ATT&CK tactics from Initial Access through Impact." },
        { label: "Technique Identification", text: "Assigned specific technique IDs (e.g., T1566 Phishing, T1110 Brute Force, T1059 Command Line Execution) to observed evidence." },
        { label: "Detection Gap Analysis", text: "Assessed which security controls caught the activity and identified blind spots in current log collection policies." },
        { label: "Documentation", text: "Structured findings into actionable threat-intelligence notes usable by incident handlers and security engineers." }
      ]
    },
    {
      id: "lab-ransomware-privesc",
      title: "Ransomware & Privilege Escalation Investigation",
      badge: "Endpoint Telemetry & Host Defense",
      description: "Investigated simulated ransomware behaviors and privilege-escalation scenarios, identifying appropriate containment actions to halt attacker lateral progression.",
      workflow: [
        { label: "Privilege Escalation Tracing", text: "Monitored unauthorized access token elevation, suspicious scheduled task creation, and unquoted service path exploitation." },
        { label: "Behavioral Detection", text: "Flagged anomalous execution of system utilities (e.g., vssadmin, bcdedit, cipher) used to inhibit system recovery." },
        { label: "Encryption Anomaly", text: "Detected rapid file modification bursts and unexpected changes to common file extensions." },
        { label: "Containment Response", text: "Executed immediate host network isolation, terminated malicious parent/child process trees, and secured forensic memory dumps." }
      ]
    },
    {
      id: "lab-incident-reporting",
      title: "Incident Reporting & Threat Documentation",
      badge: "Blue Team Operational Deliverables",
      description: "Created structured incident reports and threat-analysis documentation simulating real-world SOC operations to communicate findings clearly to technical and executive stakeholders.",
      workflow: [
        { label: "Executive Summary", text: "Drafted high-level summaries outlining incident nature, business impact, and containment timeline." },
        { label: "Detailed Chronology", text: "Constructed precise timestamped incident timelines correlating network, host, and identity logs." },
        { label: "IOC Compendium", text: "Compiled validated indicators of compromise including hashes, IP addresses, domains, and modified registry keys." },
        { label: "Remediation Guidance", text: "Formulated actionable recommendations for perimeter defense hardening, credential resets, and detection rule tuning." }
      ]
    }
  ],

  caseStudies: [
    {
      id: "cs-1",
      title: "Phishing Email Investigation",
      badge: "Email Security",
      threat: "Credential Harvesting & Weaponized Attachment",
      indicators: [
        "Mismatched 'From' header vs 'Return-Path' domain",
        "SPF SoftFail and DMARC alignment failure",
        "Embedded obfuscated link to newly registered domain",
        "Attached .docm file containing auto-executing macros"
      ],
      investigation: "Parsed email headers to verify message origin path. Validated cryptographic DKIM signatures and SPF records. Defanged external URLs and submitted attachment hash to threat reputation engines. Queried mail logs to identify all enterprise recipients who received identical subject lines.",
      mitreMapping: "T1566.001 (Spearphishing Attachment) • T1204.002 (User Execution: Malicious File)",
      severity: "High",
      response: "Purged email from all recipient inboxes at the mail gateway. Blocked sender domain and sender IP on edge firewalls. Reset credentials for targeted users who had opened the message.",
      outcome: "Prevented credential exposure and blocked potential initial access vector before execution occurred.",
      placeholderNotice: "Standardized SOC investigation framework. Additional lab telemetry and evidence attachments can be viewed upon request."
    },
    {
      id: "cs-2",
      title: "Brute Force / Authentication Investigation",
      badge: "Identity Defense",
      threat: "Targeted Credential Guessing & Active Directory Probing",
      indicators: [
        "Spike of 100+ Windows Security Event 4625 within 2 minutes",
        "Targeted accounts included service accounts and administrator handles",
        "Source IP originated from an internal workstation subnet",
        "Sub-status code 0xC000006A (bad password) consistently logged"
      ],
      investigation: "Extracted event telemetry from Active Directory domain controllers. Filtered for Event ID 4625 and checked for subsequent Event ID 4624 (logon success). Correlated internal source IP with DHCP server leases and endpoint asset registers to locate the physical machine executing the requests.",
      mitreMapping: "T1110.001 (Brute Force: Password Guessing) • T1078 (Valid Accounts)",
      severity: "Medium",
      response: "Locked targeted user accounts in accordance with security policy. Contacted endpoint owner and initiated network isolation on source workstation to inspect for resident credential-stealing malware.",
      outcome: "Successfully contained unauthorized access attempt with zero confirmed successful breaches across domain accounts.",
      placeholderNotice: "Standardized SOC investigation framework. Additional lab telemetry and evidence attachments can be viewed upon request."
    },
    {
      id: "cs-3",
      title: "IDS/NDR Alert Investigation",
      badge: "Network Security",
      threat: "Suspicious Outbound Beaconing & C2 Communication",
      indicators: [
        "IDS alert for periodic HTTP POST beaconing to unclassified external IP",
        "Non-standard HTTP user-agent header detected in network traffic",
        "Repetitive beacon interval with minimal jitter observed over 4 hours",
        "External destination IP flagged on community threat intelligence feeds"
      ],
      investigation: "Extracted packet capture (PCAP) for the flagged connection. Reconstructed TCP streams in Wireshark to inspect POST payload content. Correlated network timestamp with host Sysmon process creation logs (Event ID 1) to identify which executable initiated the socket connection.",
      mitreMapping: "T1071.001 (Application Layer Protocol: Web Protocols) • T1571 (Non-Standard Port)",
      severity: "High",
      response: "Blacklisted destination IP address on edge firewalls. Isolated the transmitting endpoint from the corporate LAN via EDR console. Extracted malicious executable from the host for static signature creation.",
      outcome: "Terminated active command and control channel and prevented potential data exfiltration.",
      placeholderNotice: "Standardized SOC investigation framework. Additional lab telemetry and evidence attachments can be viewed upon request."
    },
    {
      id: "cs-4",
      title: "Ransomware Investigation",
      badge: "Host Protection",
      threat: "Simulated Ransomware Deployment & Backup Invalidation",
      indicators: [
        "Execution of vssadmin.exe attempting deletion of volume shadow copies",
        "Mass creation of encrypted files with anomalous extensions in user directories",
        "Sudden spike in disk I/O activity from an unverified background process",
        "Ransom note text file dropped across affected folders"
      ],
      investigation: "Analyzed host process tree starting from parent process to identify initial execution origin. Checked Windows Event ID 1102 (audit log cleared) and Event ID 4688 (process creation). Confirmed attempt to disable system restore points using built-in Windows utilities.",
      mitreMapping: "T1486 (Data Encrypted for Impact) • T1490 (Inhibit System Recovery)",
      severity: "Critical",
      response: "Triggered immediate host network disconnection to prevent lateral spread to network shares. Terminated offending process tree. Identified clean backup restore points and initiated asset re-imaging procedures.",
      outcome: "Contained malware within single test environment without lateral propagation; validated backup recovery procedures.",
      placeholderNotice: "Standardized SOC investigation framework. Additional lab telemetry and evidence attachments can be viewed upon request."
    },
    {
      id: "cs-5",
      title: "Privilege Escalation Investigation",
      badge: "Host Security",
      threat: "Unauthorized Administrative Privilege Escalation",
      indicators: [
        "Standard user context executing commands with High/System integrity",
        "Creation of suspicious scheduled task running as SYSTEM (Event ID 4698)",
        "Modification of Windows service binary path registry key",
        "Execution of whoami /priv showing enabled SeImpersonatePrivilege"
      ],
      investigation: "Traced process creation chain through EDR telemetry. Checked Security Event logs for Event 4672 (Special privileges assigned to new logon). Analyzed registry keys for persistence hooks and examined recently written files in system folders.",
      mitreMapping: "T1068 (Exploitation for Privilege Escalation) • T1053.005 (Scheduled Task)",
      severity: "High",
      response: "Revoked elevated privileges, disabled compromised local account, removed unauthorized scheduled tasks and registry keys, and patched local system vulnerabilities.",
      outcome: "Neutralized persistent elevated access and restored least-privilege boundary across the host.",
      placeholderNotice: "Standardized SOC investigation framework. Additional lab telemetry and evidence attachments can be viewed upon request."
    }
  ],

  networkingNodes: [
    {
      id: "net-fw",
      name: "Perimeter Firewall & NAT",
      layer: "Edge Defense",
      role: "Stateful packet inspection, ingress/egress access control lists (ACLs), Network Address Translation.",
      socPerspective: "SOC analysts inspect firewall drop logs to detect external reconnaissance, port scans, and unauthorized outbound connections originating from compromised internal IPs.",
      protocols: ["TCP", "UDP", "NAT", "ACLs", "Stateful Inspection"]
    },
    {
      id: "net-vpn",
      name: "VPN Gateway",
      layer: "Remote Access",
      role: "Secure encrypted tunneling for remote workforce, integrating with RADIUS/MFA authentication servers.",
      socPerspective: "Monitored for impossible travel anomalies (e.g. logons from two disparate geographic locations within minutes), brute force attacks against remote access portals, and session hijacking.",
      protocols: ["IPsec", "SSL/TLS", "IKEv2", "OpenVPN"]
    },
    {
      id: "net-vlan",
      name: "Core Switching & VLANs",
      layer: "Internal Segmentation",
      role: "Layer 2/Layer 3 switching, 802.1Q trunking, isolating network segments (e.g. DMZ, Corporate, SOC Lab, Servers).",
      socPerspective: "VLAN segmentation acts as a primary barrier against lateral movement (MITRE T1021). Analysts monitor inter-VLAN routing logs to detect unauthorized cross-segment exploration.",
      protocols: ["802.1Q", "Spanning Tree (STP)", "L2/L3 Routing", "ARP"]
    },
    {
      id: "net-dns",
      name: "Enterprise DNS Resolver",
      layer: "Name Resolution",
      role: "Recursive domain name resolution, caching, authoritative forward/reverse lookup zones.",
      socPerspective: "High-value monitoring point: SOC analysts inspect DNS query logs to detect DNS tunneling (data exfiltration), DGA (Domain Generation Algorithm) lookups, and fast-flux C2 infrastructure.",
      protocols: ["DNS (UDP/TCP 53)", "DoH/DoT", "DNSSEC", "TXT/A/AAAA Records"]
    },
    {
      id: "net-dhcp",
      name: "DHCP Server",
      layer: "Address Allocation",
      role: "Dynamic IP address leasing, subnet mask assignment, default gateway and DNS server provisioning.",
      socPerspective: "Critical during incident triage: DHCP lease histories allow analysts to reliably correlate a dynamic IP address observed in logs back to a specific MAC address and endpoint hostname.",
      protocols: ["DHCP (UDP 67/68)", "DORA Process", "IP-MAC Lease Tracking"]
    },
    {
      id: "net-tap",
      name: "Network TAP & IDS/NDR",
      layer: "Security Telemetry",
      role: "Port mirroring (SPAN) feeding deep packet inspection engines (Snort/Suricata/Zeek) without latency.",
      socPerspective: "Captures full PCAP and generates metadata on network streams, enabling analysts to inspect HTTP headers, TLS handshakes, and flag unencrypted credentials or malicious payloads.",
      protocols: ["SPAN/Mirroring", "PCAP Extraction", "Protocol Decoders", "TCP Stream Reassembly"]
    },
    {
      id: "net-web",
      name: "DMZ Web Server (HTTP/HTTPS)",
      layer: "Application Gateway",
      role: "Hosting public web services, terminating TLS connections, proxying application requests.",
      socPerspective: "Monitored for web application attacks including SQL Injection (SQLi), Cross-Site Scripting (XSS), directory traversal, and brute-force probing recorded in web access logs.",
      protocols: ["HTTP", "HTTPS", "TLS 1.3", "REST", "WAF Logs"]
    },
    {
      id: "net-host",
      name: "Endpoint / Workstation",
      layer: "Internal Host",
      role: "User computing environment, executing applications, communicating through default gateways.",
      socPerspective: "Primary vector for initial access via phishing and user execution. Monitored via EDR and Windows Event Logs for abnormal parent-child process relationships and local privilege escalation.",
      protocols: ["SMB", "RDP", "WinRM", "RPC", "Kerberos / NTLM"]
    }
  ],

  mitreTechniques: [
    {
      id: "T1566",
      tactic: "Initial Access",
      name: "Phishing",
      description: "Adversaries send malicious emails with attachments or links to gain initial access to user systems.",
      aliApproach: "Header analysis (SPF/DKIM/DMARC), sandbox triage of attachments, email quarantine workflows.",
      telemetrySource: "Mail Gateway logs, EDR process creation, Proxy/DNS logs"
    },
    {
      id: "T1204",
      tactic: "Execution",
      name: "User Execution",
      description: "Adversaries rely on a user to execute malicious code, such as opening an email attachment or macro.",
      aliApproach: "Tracing parent-child process chains (e.g. WINWORD.EXE launching PowerShell or CMD).",
      telemetrySource: "EDR telemetry, Sysmon Event ID 1"
    },
    {
      id: "T1059",
      tactic: "Execution",
      name: "Command and Scripting Interpreter",
      description: "Adversaries abuse command shells (PowerShell, cmd, bash) to execute commands or malicious scripts.",
      aliApproach: "Analyzing script block logging, Base64 encoded arguments, and abnormal script invocation flags.",
      telemetrySource: "PowerShell Event ID 4104, Sysmon, Linux bash history"
    },
    {
      id: "T1098",
      tactic: "Persistence",
      name: "Account Manipulation",
      description: "Adversaries manipulate user accounts to maintain access to victim systems without re-authenticating.",
      aliApproach: "Auditing AD security group additions (Event ID 4728) and unauthorized credential modifications.",
      telemetrySource: "Windows Security Event Logs, Active Directory auditing"
    },
    {
      id: "T1068",
      tactic: "Privilege Escalation",
      name: "Exploitation for Privilege Escalation",
      description: "Adversaries exploit software vulnerabilities or system misconfigurations to elevate access levels.",
      aliApproach: "Tracking integrity level changes, token impersonation, and unquoted service path execution.",
      telemetrySource: "EDR host sensor, Windows Security Event ID 4672"
    },
    {
      id: "T1110",
      tactic: "Credential Access",
      name: "Brute Force",
      description: "Adversaries systematically guess passwords or perform password sprays across multiple accounts.",
      aliApproach: "Monitoring Windows Event 4625 bursts, evaluating sub-status codes, and checking for lockout threshold breaches.",
      telemetrySource: "Domain Controller logs, VPN authentication logs, Linux auth.log"
    },
    {
      id: "T1046",
      tactic: "Discovery",
      name: "Network Service Discovery",
      description: "Adversaries enumerate listening services and open ports to identify remote vulnerabilities.",
      aliApproach: "Correlating perimeter firewall drop spikes, TCP SYN sweeps, and abnormal ARP scanning activity.",
      telemetrySource: "Firewall drop logs, IDS signatures, Zeek conn.log"
    },
    {
      id: "T1021",
      tactic: "Lateral Movement",
      name: "Remote Services",
      description: "Adversaries log onto remote systems using built-in services like RDP, SMB, or WinRM.",
      aliApproach: "Validating network segmentation boundaries, tracking Event ID 4624 (Logon Type 3 and Type 10).",
      telemetrySource: "Network flow logs, EDR network connections, AD Kerberos events"
    },
    {
      id: "T1071",
      tactic: "Command and Control",
      name: "Application Layer Protocol",
      description: "Adversaries communicate with external C2 servers using standard protocols (HTTP, HTTPS, DNS).",
      aliApproach: "Identifying beaconing cadence, analyzing HTTP headers, and inspecting high-entropy DNS queries.",
      telemetrySource: "NDR sensors, Proxy logs, DNS query logs, Wireshark PCAPs"
    },
    {
      id: "T1486",
      tactic: "Impact",
      name: "Data Encrypted for Impact",
      description: "Adversaries encrypt data on target systems to disrupt availability and demand ransom.",
      aliApproach: "Detecting sudden mass file rename operations, high entropy data writes, and dropped ransom notes.",
      telemetrySource: "EDR file system monitoring, Volume Shadow Copy audit events"
    },
    {
      id: "T1490",
      tactic: "Impact",
      name: "Inhibit System Recovery",
      description: "Adversaries delete or disable system backups, restore points, and shadow copies to prevent recovery.",
      aliApproach: "Alerting on command line execution of 'vssadmin delete shadows' and 'bcdedit' tampering.",
      telemetrySource: "Process execution telemetry, PowerShell audit logs"
    }
  ],

  trainingAndCourses: {
    certifications: [
      {
        title: "Linux Administration Certification",
        provider: "Edges Academy",
        type: "Certification",
        badge: "Verified Certification",
        description: "Official certification validating Linux system administration skills, user management, file permissions, shell commands, process control, and system service configuration."
      }
    ],
    handsOnPrograms: [
      {
        title: "CyberOps Associate",
        provider: "Cisco Networking Academy",
        type: "Coursework & Labs",
        badge: "Applied Security Training",
        description: "Comprehensive coursework and hands-on laboratory exercises focusing on security concepts, security monitoring, host-based analysis, network intrusion analysis, and security policies and procedures."
      },
      {
        title: "SOC Level 1 Learning Path",
        provider: "TryHackMe",
        type: "Hands-on Labs",
        badge: "Interactive SOC Simulation",
        description: "Practical blue-team labs covering Junior SOC Analyst fundamentals: alert triage, Cyber Kill Chain, MITRE ATT&CK, SIEM investigation with Splunk, network traffic analysis with Wireshark, phishing analysis, and incident response."
      },
      {
        title: "Linux Fundamentals",
        provider: "TryHackMe",
        type: "Hands-on Labs",
        badge: "Hands-on Lab Series",
        description: "Practical command-line lab modules covering Linux filesystem navigation, text manipulation (grep, awk, sed), file permissions, package management, process monitoring, and log investigation."
      }
    ],
    conceptualFoundations: [
      {
        title: "Cisco CCNA – Networking Knowledge & Concepts",
        provider: "Cisco Networking Knowledge",
        type: "Foundational Knowledge",
        badge: "Network Architecture",
        description: "In-depth understanding of routing and switching, IP addressing, subnetting, TCP/IP, OSI model, VLANs, NAT, access control lists, and network infrastructure design."
      },
      {
        title: "Networking Basics – CompTIA Network+ Concepts",
        provider: "Professor Messer",
        type: "Foundational Knowledge",
        badge: "Network Protocols & Topologies",
        description: "Core networking concepts covering network architecture, cabling, wireless standards, protocol analysis, network services (DNS, DHCP), and foundational network troubleshooting methodologies."
      }
    ]
  },

  careerTimeline: [
    {
      period: "Engineering Academic Degree",
      stage: "Education",
      title: "Bachelor's Degree – Electronics & Communication Engineering",
      institution: "MIU (Misr International University)",
      grade: "Graduation Project: Grade A | GPA: 3.18",
      description: "Established a solid technical foundation in engineering problem-solving, communications, signal principles, hardware architecture, and rigorous analytical troubleshooting.",
      badge: "Academic Foundation"
    },
    {
      period: "Networking & Protocols",
      stage: "Foundation",
      title: "Cisco CCNA & CompTIA Network+ Foundations",
      institution: "Cisco & Professor Messer Curricula",
      grade: "Networking Architecture & Protocol Concepts",
      description: "Deepened technical mastery of TCP/IP, OSI layered model, routing, switching, VLAN segmentation, NAT, and network troubleshooting essential for analyzing packet-level cyber threats.",
      badge: "Protocol Mastery"
    },
    {
      period: "Operating Systems & CLI",
      stage: "Systems",
      title: "Linux Administration Certification & Hands-on Labs",
      institution: "Edges Academy & TryHackMe",
      grade: "Certified Linux Administrator",
      description: "Mastered Linux command-line environments, log analysis (syslog, auth.log), user permissions, process inspection, and command-line parsing tools (grep, awk, sed) critical for SOC investigations.",
      badge: "Certified Competency"
    },
    {
      period: "Security Operations",
      stage: "CyberOps",
      title: "Cisco CyberOps Associate",
      institution: "Cisco Networking Academy",
      grade: "Coursework & Laboratory Exercises",
      description: "Completed specialized training in security operations, threat detection methodologies, incident triage, security policies, and foundational host and network monitoring.",
      badge: "Blue Team Fundamentals"
    },
    {
      period: "Hands-On SOC Simulation",
      stage: "SOC Tier 1",
      title: "TryHackMe SOC Level 1 Learning Path",
      institution: "TryHackMe Blue Team Simulation",
      grade: "Applied Blue Team Labs",
      description: "Practiced real-world threat detection scenarios, alert triage, SIEM query formulation, Wireshark packet dissection, phishing email decomposition, and MITRE ATT&CK mapping.",
      badge: "Hands-on Practice"
    },
    {
      period: "2026",
      stage: "Self-Directed Labs",
      title: "Hands-on Security Investigations & Incident Simulations",
      institution: "SOC Analyst Training – Self-Directed Labs",
      grade: "Practical SOC Investigation Workflows",
      description: "Investigated phishing emails, brute force log anomalies, IDS/NDR alerts, ransomware scenarios, and executed structured SOC triage and incident reporting workflows.",
      badge: "Applied Experience"
    },
    {
      period: "Present",
      stage: "Target Career",
      title: "Junior SOC Analyst / Blue Team Professional",
      institution: "Seeking Entry-Level Security Operations Role",
      grade: "Ready for Tier 1 Deployment",
      description: "Prepared to defend enterprise environments, monitor SIEM/EDR consoles, triage incoming alerts, correlate telemetry, and execute blue-team incident investigations.",
      badge: "Actively Applying"
    }
  ]
};

// Make accessible in both window and module environments if needed
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
