package com.portalprojects.repository;

import com.portalprojects.entity.MissionDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository(MissionDetailRepository.NAME)
public interface MissionDetailRepository extends JpaRepository<MissionDetail,String> {

    String NAME = "BaseMissionDetailRepository";
}
