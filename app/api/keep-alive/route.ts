import { supabase } from '../../lib/supabase';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { count } = await supabase
      .from('suppliers')
      .select('*', { count: 'exact', head: true });

    return NextResponse.json({
      status: 'alive',
      suppliers_count: count,
      timestamp: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json({ status: 'error' }, { status: 500 });
  }
}