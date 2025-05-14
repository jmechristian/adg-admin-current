// app/api/mailchimp/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const {
    name,
    email,
    company,
    interestedIn,
    projectAddress,
    projectDescription,
    projectBudget,
  } = await req.json();

  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

  const url = `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  const interestedInString = interestedIn.join(', ');
  const budgetString = Number(projectBudget);

  const payload = {
    email_address: email,
    status: 'subscribed',
    merge_fields: {
      FULLNAME: name,
      COMPANY: company,
      INTERESTD: interestedInString,
      TXTADDRS: projectAddress,
      DESCRIPTN: projectDescription,
      BUDGET: budgetString,
    },
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `apikey ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    return NextResponse.json({ success: true });
  } else {
    const error = await response.json();
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}
