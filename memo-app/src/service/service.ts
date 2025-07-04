import { main } from '../main';
import { renderMemo } from '../card';
import { supabase } from '../supabase/supabase';
import type { Tables } from '../supabase/database.types';
import { handleClosePop } from '../handler';

// supabase type 접근 방식
// import type { Database, Tables } from '../supabase/database.types';
 // 1) let memo: Database['public']['Tables']['memo']['Row']
 // 2) let memo: Tables<'memo'>


export async function fetchMemo() {
  const {data, error} = await supabase
    .from('memo')
    .select()
    .order('position', {ascending: true});
  if(error) console.error("서버와의 통신에 실패했습니다.");

  main.innerHTML = '';
  data && data.forEach((memoItem) => {
    renderMemo(main, memoItem)
  });
}

export async function deleteMemo(id:number) {
  const { data:deletedData, error } = await supabase
    .from('memo')
    .delete()
    .eq('id', id)
    .select()

    fetchMemo();
    sortMemo();
  
  if(error) console.error('서버와의 통신에 실패했습니다.');
}

export async function insertMemo({title, description, priority, position}
  :Pick<Tables<'memo'>, "title" | "description" | "priority" | "position">) {
  const { error } = await supabase
  .from('memo')
  .insert({
    title,
    description,
    priority,
    position,
  })

  fetchMemo();
  handleClosePop();

  if(error) console.error('서버와의 통신에 실패했습니다.');
}

export function sortMemo() {
  const sortedItems = document.querySelectorAll('article');
  sortedItems.forEach(async (item, index) => {
    await supabase
    .from('memo')
    .update({position:index})
    .eq('id', +item.dataset.id!)
  })
}