import React from 'react'

import _str from '~/settings/strings'

export default (props) => (
	<>
  <p>
    This site (the "Site") is owned and maintained by {_str('appTitleLegal')},
    which is not a registered broker - dealer. {_str('appTitleLegal')} does
     not give investment advice, endorsement, analysis or recommendations
    with respect to any securities. All securities listed here are being offered
    by, and all information included on this Site is the responsibility of, the
    applicable issuer of such securities.
  </p>
  <p>
    All broker - dealer related securities activity is conducted by
    Vertical Management LLC, a registered broker - dealer, and member of
    <a href="https://www.finra.org">FINRA</a> | <a href="https://www.sipc.org/">SiPC</a>,
    located at 361 Vernon Ave #2, Venice, CA 90291,
    please check our background on <a
    href="https://www.adviserinfo.sec.gov/IAPD/IAPDFirmSummary.aspx?ORG_PK=1337">FINRA's
    BrokerCheck</a>.  Vertical does not make investment recommendations
    and no communication, through this Site or in any other medium should be
    concommonStrued as a recommendation for any security offered on or off this
    investment platform. Investment opportunities posted on this Site are private
    placements of securities that are not publicly traded, involve a high degree
    of risk, may lose value, are subject to holding period requirements and are
    intended for investors who do not need a liquid investment. Past performance
    is not indicative of future results. Investors must be able to afford the
    loss of their entire investment.
  </p>
  <p>
    Neither {_str('appTitleLegal')} nor any of their officers, directors,
    agents and employees makes any warranty, express or implied, of any kind
    whatsoever related to the adequacy, accuracy or completeness of any
    information on this Site or the use of information on this site. Offers to
    sell securities can only be made through official offering documents that
    contain important information about the investment and the issuers, including
    risks. Investors should carefully read the offering documents. Investors
    should conduct their own due diligence and are encouraged to consult with
    their tax, legal and financial advisors.
  </p>
  <p>
    By accessing the Site and any pages thereof, you agree to be bound
    by the <a href="/terms">Terms of Use</a> and <a href="/privacy">Privacy Policy</a>.
    Please also see the <a href="/risks">Additional Risk Disclosures</a>.
  </p>
  <p>
    Investment in entertainment is particularly risky and may result in
    total loss of invested capital. Past performance of a security or IP does not
    guarantee future results or returns. Only investors who understand the risks
    of early stage investment and who meet {_str('appTitleShortCaps')}&lsquo;s investment criteria may
    invest.
  </p>
  <p>
    {_str('appTitleShortCaps')} does not verify information provided by companies on this
    Portal and makes no assurance as to the completeness or accuracy of any such
    information. Additional information about projects fundraising on the Portal
    can be found by searching the <a href="https://www.sec.gov/edgar/searchedgar/companysearch.html">EDGAR database</a>.
  </p>
	</>
)
